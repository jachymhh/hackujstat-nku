import requests
import json
import os
import re

# Funkce pro odstranění diakritiky
def remove_diacritics(text):
    diacritics = {
        'á': 'a', 'č': 'c', 'ď': 'd', 'é': 'e', 'ě': 'e', 'í': 'i',
        'ň': 'n', 'ó': 'o', 'ř': 'r', 'š': 's', 'ť': 't', 'ú': 'u',
        'ů': 'u', 'ý': 'y', 'ž': 'z',
        'Á': 'A', 'Č': 'C', 'Ď': 'D', 'É': 'E', 'Ě': 'E', 'Í': 'I',
        'Ň': 'N', 'Ó': 'O', 'Ř': 'R', 'Š': 'S', 'Ť': 'T', 'Ú': 'U',
        'Ů': 'U', 'Ý': 'Y', 'Ž': 'Z'
    }
    
    for char, replacement in diacritics.items():
        text = text.replace(char, replacement)
    return text

# Funkce pro standardizaci názvů krajů
def standardize_kraj_name(kraj_name):
    # Mapa pro převod názvů krajů z API kriminality na názvy z API obyvatel
    kraj_mapping = {
        "praha": "Praha",
        "jihocesky": "Jihočeský kraj",
        "jihomoravsky": "Jihomoravský kraj",
        "karlovarsky": "Karlovarský kraj",
        "vysocina": "Vysočina",
        "kralovehradecky": "Královéhradecký kraj",
        "liberecky": "Liberecký kraj",
        "moravskoslezsky": "Moravskoslezský kraj",
        "olomoucky": "Olomoucký kraj",
        "pardubicky": "Pardubický kraj",
        "plzensky": "Plzeňský kraj",
        "stredocesky": "Středočeský kraj",
        "ustecky": "Ústecký kraj",
        "zlinsky": "Zlínský kraj"
    }
    
    mapped_name = kraj_mapping.get(kraj_name.lower(), kraj_name)
    print(f"Standardizuji název kraje: {kraj_name} -> {mapped_name}")
    return mapped_name

# Načtení dat o kriminalitě pro všechny kraje
def get_krimi_data():
    kraje = ["praha", "jihocesky", "jihomoravsky", "karlovarsky", "vysocina", 
             "kralovehradecky", "liberecky", "moravskoslezsky", "olomoucky", 
             "pardubicky", "plzensky", "stredocesky", "ustecky", "zlinsky"]
    
    print("\n=== NAČÍTÁNÍ DAT O KRIMINALITĚ ===")
    all_krimi_data = {}
    
    for kraj in kraje:
        try:
            print(f"\nStahuji data o kriminalitě pro kraj: {kraj}")
            response = requests.get(f"http://localhost:3000/api/krimi/{kraj}")
            data = response.json()
            
            # Extrakce dat z odpovědi API
            if "data" in data and len(data["data"]) > 0:
                # Získání názvu kraje a jeho dat
                kraj_name = list(data["data"][0].keys())[0]
                kraj_data = data["data"][0][kraj_name]
                
                print(f"Získaná data pro: {kraj_name}, počet záznamů: {len(kraj_data)}")
                print(f"První záznam: {kraj_data[0] if kraj_data else 'Žádná data'}")
                
                # Standardizace názvu kraje
                standardized_name = standardize_kraj_name(kraj)
                all_krimi_data[standardized_name] = kraj_data
                
                print(f"Data uložena pod standardizovaným názvem: {standardized_name}")
            else:
                print(f"Žádná data nebyla nalezena pro kraj: {kraj}")
            
        except Exception as e:
            print(f"Chyba při načítání dat pro kraj {kraj}: {e}")
    
    print(f"\nCelkem načteno dat pro {len(all_krimi_data)} krajů.")
    print(f"Seznam krajů: {list(all_krimi_data.keys())}")
    
    return all_krimi_data

# Načtení dat o počtu obyvatel
def get_obyvatele_data():
    print("\n=== NAČÍTÁNÍ DAT O POČTU OBYVATEL ===")
    try:
        print("Stahuji data o počtu obyvatel...")
        response = requests.get("http://localhost:3000/api/obyvatele")
        data = response.json()
        
        print(f"Získáno {len(data.get('data', []))} záznamů o počtu obyvatel.")
        
        # Strukturování dat podle kraje a roku
        obyvatele_data = {}
        
        for item in data.get("data", []):
            rok = item.get("Roky")
            kraj = item.get("Kraj")
            hodnota = item.get("Hodnota")
            
            if rok and kraj and hodnota:
                if kraj not in obyvatele_data:
                    obyvatele_data[kraj] = {}
                
                obyvatele_data[kraj][rok] = hodnota
        
        print(f"\nData o obyvatelích strukturována pro {len(obyvatele_data)} krajů.")
        print(f"Seznam krajů v datech o obyvatelích: {list(obyvatele_data.keys())}")
        
        # Vypsat počet let s daty pro každý kraj
        for kraj, roky in obyvatele_data.items():
            print(f"Kraj {kraj}: data za {len(roky)} let (roky: {list(roky.keys())})")
            print(f"  Příklad: rok {list(roky.keys())[0] if roky else '-'} má {roky.get(list(roky.keys())[0], '-') if roky else '-'} obyvatel")
        
        return obyvatele_data
    
    except Exception as e:
        print(f"Chyba při načítání dat o obyvatelích: {e}")
        return {}

# Výpočet indexu bezpečnosti
def calculate_security_index(krimi_data, obyvatele_data):
    print("\n=== VÝPOČET INDEXU BEZPEČNOSTI ===")
    bezpecnostni_indexy = {}
    
    for kraj, kraj_data in krimi_data.items():
        print(f"\nVýpočet indexu pro kraj: {kraj}")
        bezpecnostni_indexy[kraj] = []
        
        for item in kraj_data:
            rok = item.get("rok")
            obecna_kriminalita = item.get("obecna_kriminalita")
            
            # Pokud kraj existuje v datech o obyvatelích a máme data pro daný rok
            if kraj in obyvatele_data and rok in obyvatele_data[kraj]:
                pocet_obyvatel = obyvatele_data[kraj][rok]
                
                # Výpočet počtu trestných činů na 100 000 obyvatel
                index = (obecna_kriminalita / pocet_obyvatel) * 100000
                
                print(f"  Rok {rok}: Kriminalita {obecna_kriminalita}, Počet obyvatel {pocet_obyvatel}, Index {round(index)} na 100 000 obyvatel")
                
                bezpecnostni_indexy[kraj].append({
                    "rok": rok,
                    "index": round(index)
                })
            else:
                print(f"  Pro rok {rok} nebyla nalezena data o počtu obyvatel v kraji {kraj}")
    
    # Vypsat přehled vypočítaných indexů
    print("\nPřehled vypočítaných indexů bezpečnosti:")
    for kraj, data in bezpecnostni_indexy.items():
        indexy = [item["index"] for item in data]
        if indexy:
            print(f"Kraj {kraj}: min {min(indexy)}, max {max(indexy)}, průměr {sum(indexy)/len(indexy):.2f}")
        else:
            print(f"Kraj {kraj}: Žádné indexy")
    
    return bezpecnostni_indexy

# Normalizace indexů od 0 do 100 (kde 0 je nejhorší a 100 nejlepší)
def normalize_indexes(indexes):
    print("\n=== NORMALIZACE INDEXŮ ===")
    # Najít minimum a maximum ze všech indexů
    all_values = []
    for kraj, data in indexes.items():
        for item in data:
            all_values.append(item["index"])
    
    min_value = min(all_values) if all_values else 0
    max_value = max(all_values) if all_values else 100
    
    print(f"Minimální hodnota indexu: {min_value}")
    print(f"Maximální hodnota indexu: {max_value}")
    print(f"Rozdíl max-min: {max_value - min_value}")
    
    # Normalizace indexů
    normalized_indexes = {}
    for kraj, data in indexes.items():
        print(f"\nNormalizace pro kraj: {kraj}")
        normalized_indexes[kraj] = []
        for item in data:
            # Převrácení hodnot, aby 0 bylo nejhorší a 100 nejlepší
            # (vyšší kriminalita = horší bezpečnost)
            if max_value == min_value:
                normalized_value = 50  # Pokud všechny hodnoty jsou stejné
                print(f"  Všechny hodnoty jsou stejné, použití hodnoty 50")
            else:
                normalized_value = 100 - ((item["index"] - min_value) / (max_value - min_value) * 100)
                print(f"  Rok {item['rok']}: Původní index {item['index']} -> Normalizovaný index {round(normalized_value)}")
            
            normalized_indexes[kraj].append({
                "rok": item["rok"],
                "index": round(normalized_value)
            })
    
    # Vypsat přehled normalizovaných indexů
    print("\nPřehled normalizovaných indexů:")
    for kraj, data in normalized_indexes.items():
        indexy = [item["index"] for item in data]
        if indexy:
            print(f"Kraj {kraj}: min {min(indexy)}, max {max(indexy)}, průměr {sum(indexy)/len(indexy):.2f}")
        else:
            print(f"Kraj {kraj}: Žádné indexy")
    
    return normalized_indexes

# Vytvoření souborů route.js
def create_route_files(normalized_indexes):
    print("\n=== VYTVÁŘENÍ SOUBORŮ ROUTE.JS ===")
    for kraj, data in normalized_indexes.items():
        # Odstranění diakritiky a slova "kraj" z názvu pro složku
        folder_name = remove_diacritics(kraj.lower())
        folder_name = re.sub(r' kraj$', '', folder_name)
        
        print(f"\nVytvářím soubor pro kraj: {kraj}")
        print(f"Název složky: {folder_name}")
        print(f"Počet záznamů: {len(data)}")
        
        # Vytvoření složky, pokud neexistuje
        os.makedirs(folder_name, exist_ok=True)
        print(f"Složka {folder_name} vytvořena nebo již existuje")
        
        # Sestavení dat v požadovaném formátu
        items_formatted = []
        for item in data:
            items_formatted.append(f" {{\nrok: {item['rok']},\nindex: {item['index']},\n }}")
        
        items_string = ",\n".join(items_formatted)
        
        # Vytvoření obsahu souboru route.js v požadovaném formátu
        file_content = f"""export async function GET() {{
 const data = [
 {{
"{kraj}": [
{items_string}
]
 }}
 ];
 return Response.json({{ data }});
}}
"""
        
        # Zápis souboru
        filepath = f"{folder_name}/route.js"
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(file_content)
        
        print(f"Soubor {filepath} byl úspěšně vytvořen")
        print(f"Ukázka obsahu souboru:")
        print("\n".join(file_content.split("\n")[:15]) + "\n...")

def main():
    print("===== ZAČÁTEK VÝPOČTU INDEXU BEZPEČNOSTI =====")
    
    # Získání dat o kriminalitě
    krimi_data = get_krimi_data()
    
    # Získání dat o obyvatelích
    obyvatele_data = get_obyvatele_data()
    
    # Výpočet indexu bezpečnosti
    security_indexes = calculate_security_index(krimi_data, obyvatele_data)
    
    # Normalizace indexů od 0 do 100
    normalized_indexes = normalize_indexes(security_indexes)
    
    # Vytvoření souborů route.js
    create_route_files(normalized_indexes)
    
    print("\n===== KONEC VÝPOČTU INDEXU BEZPEČNOSTI =====")

if __name__ == "__main__":
    main()