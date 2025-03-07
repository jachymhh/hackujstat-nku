import json
import os
import requests
from pathlib import Path

def get_population_data():
    """Fetch population data from the API"""
    try:
        response = requests.get('http://localhost:3000/api/obyvatele')
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch population data: HTTP {response.status_code}")
            return None
    except Exception as e:
        print(f"Error fetching population data: {e}")
        return None

def process_json_files():
    """Process all JSON files in the data directory"""
    # Get population data
    population_data = get_population_data()
    if not population_data or 'data' not in population_data:
        print("No valid population data available")
        return
    
    # Create a lookup dictionary for population data
    population_lookup = {}
    for item in population_data['data']:
        year = item['Roky']
        region = item['Kraj']
        population = item['Hodnota']
        
        if year not in population_lookup:
            population_lookup[year] = {}
        
        population_lookup[year][region] = population
    
    # Define the multipliers from the provided table
    multipliers = {
        2015: {
            'Česko': 438718, 'Praha': 975271, 'Středočeský kraj': 391625, 'Jihočeský kraj': 351908,
            'Plzeňský kraj': 401079, 'Karlovarský kraj': 287508, 'Ústecký kraj': 328369,
            'Liberecký kraj': 336360, 'Královéhradecký kraj': 372872, 'Pardubický kraj': 346772,
            'Vysočina': 354802, 'Jihomoravský kraj': 415760, 'Olomoucký kraj': 352731,
            'Zlínský kraj': 372940, 'Moravskoslezský kraj': 358407
        },
        2016: {
            'Česko': 454022, 'Praha': 1008835, 'Středočeský kraj': 413124, 'Jihočeský kraj': 360689,
            'Plzeňský kraj': 415414, 'Karlovarský kraj': 295863, 'Ústecký kraj': 336270,
            'Liberecký kraj': 346725, 'Královéhradecký kraj': 392482, 'Pardubický kraj': 360489,
            'Vysočina': 365306, 'Jihomoravský kraj': 422688, 'Olomoucký kraj': 359772,
            'Zlínský kraj': 385553, 'Moravskoslezský kraj': 371721
        },
        2017: {
            'Česko': 482622, 'Praha': 1061767, 'Středočeský kraj': 439282, 'Jihočeský kraj': 388721,
            'Plzeňský kraj': 439561, 'Karlovarský kraj': 315090, 'Ústecký kraj': 343902,
            'Liberecký kraj': 349366, 'Královéhradecký kraj': 427537, 'Pardubický kraj': 382489,
            'Vysočina': 379891, 'Jihomoravský kraj': 440220, 'Olomoucký kraj': 372595,
            'Zlínský kraj': 411341, 'Moravskoslezský kraj': 390391
        },
        2018: {
            'Česko': 509180, 'Praha': 1136994, 'Středočeský kraj': 450733, 'Jihočeský kraj': 407696,
            'Plzeňský kraj': 459122, 'Karlovarský kraj': 324490, 'Ústecký kraj': 355678,
            'Liberecký kraj': 369436, 'Královéhradecký kraj': 448749, 'Pardubický kraj': 404845,
            'Vysočina': 391813, 'Jihomoravský kraj': 453700, 'Olomoucký kraj': 372595,
            'Zlínský kraj': 425184, 'Moravskoslezský kraj': 415600
        },
        2019: {
            'Česko': 542818, 'Praha': 1202737, 'Středočeský kraj': 458395, 'Jihočeský kraj': 436248,
            'Plzeňský kraj': 476656, 'Karlovarský kraj': 340302, 'Ústecký kraj': 387433,
            'Liberecký kraj': 381799, 'Královéhradecký kraj': 480583, 'Pardubický kraj': 427003,
            'Vysočina': 404349, 'Jihomoravský kraj': 470700, 'Olomoucký kraj': 419386,
            'Zlínský kraj': 425184, 'Moravskoslezský kraj': 424278
        },
        2020: {
            'Česko': 533556, 'Praha': 1173010, 'Středočeský kraj': 466527, 'Jihočeský kraj': 437479,
            'Plzeňský kraj': 467511, 'Karlovarský kraj': 327832, 'Ústecký kraj': 396594,
            'Liberecký kraj': 404918, 'Královéhradecký kraj': 480648, 'Pardubický kraj': 437046,
            'Vysočina': 404349, 'Jihomoravský kraj': 470700, 'Olomoucký kraj': 419386,
            'Zlínský kraj': 449542, 'Moravskoslezský kraj': 410195
        },
        2021: {
            'Česko': 571051, 'Praha': 1264456, 'Středočeský kraj': 494720, 'Jihočeský kraj': 453203,
            'Plzeňský kraj': 504354, 'Karlovarský kraj': 339491, 'Ústecký kraj': 395524,
            'Liberecký kraj': 408648, 'Královéhradecký kraj': 522924, 'Pardubický kraj': 443423,
            'Vysočina': 418042, 'Jihomoravský kraj': 562278, 'Olomoucký kraj': 422586,
            'Zlínský kraj': 452940, 'Moravskoslezský kraj': 453836
        },
        2022: {
            'Česko': 571051, 'Praha': 1264456, 'Středočeský kraj': 494720, 'Jihočeský kraj': 453203,
            'Plzeňský kraj': 504354, 'Karlovarský kraj': 339491, 'Ústecký kraj': 395524,
            'Liberecký kraj': 408648, 'Královéhradecký kraj': 522924, 'Pardubický kraj': 443423,
            'Vysočina': 418042, 'Jihomoravský kraj': 562278, 'Olomoucký kraj': 422586,
            'Zlínský kraj': 452940, 'Moravskoslezský kraj': 453836
        },
        2023: {
            'Česko': 571051, 'Praha': 1264456, 'Středočeský kraj': 494720, 'Jihočeský kraj': 453203,
            'Plzeňský kraj': 504354, 'Karlovarský kraj': 339491, 'Ústecký kraj': 395524,
            'Liberecký kraj': 408648, 'Královéhradecký kraj': 522924, 'Pardubický kraj': 443423,
            'Vysočina': 418042, 'Jihomoravský kraj': 562278, 'Olomoucký kraj': 422586,
            'Zlínský kraj': 452940, 'Moravskoslezský kraj': 453836
        }
    }
    
    # Get all JSON files in the directory
    data_dir = Path('/Users/jachym/Desktop/nku/data')
    json_files = list(data_dir.glob('*.json'))
    
    # Map filename prefixes to region names as they appear in the API
    region_mapping = {
        'jihocesky': 'Jihočeský kraj',
        'jihomoravsky': 'Jihomoravský kraj',
        'karlovarsky': 'Karlovarský kraj',
        'kralovehradecky': 'Královéhradecký kraj',
        'liberecky': 'Liberecký kraj',
        'moravskoslezsky': 'Moravskoslezský kraj',
        'olomoucky': 'Olomoucký kraj',
        'pardubicky': 'Pardubický kraj',
        'plzensky': 'Plzeňský kraj',
        'praha': 'Praha',
        'stredocesky': 'Středočeský kraj',
        'ustecky': 'Ústecký kraj',
        'vysocina': 'Vysočina',
        'zlinsky': 'Zlínský kraj',
        'cesko': 'Česko',
        'cr': 'Česko'
    }
    
    processed_count = 0
    
    for json_file in json_files:
        # Extract region from filename
        filename = json_file.stem
        region_prefix = filename.split('_')[0].lower()
        
        region_name = region_mapping.get(region_prefix)
        if not region_name:
            print(f"Could not map filename {filename} to a region name")
            continue
        
        print(f"\n--- Processing {filename} ({region_name}) ---")
        
        try:
            # Read the JSON file
            with open(json_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Get the key (like "jihocesky_vyd")
            key = list(data.keys())[0]
            modified = False
            
            # Collect all vydaje_ku_hdp values to find min and max
            values = [entry['vydaje_ku_hdp'] for entry in data[key] if 'vydaje_ku_hdp' in entry]
            if not values:
                print(f"No vydaje_ku_hdp values found in {filename}")
                continue
            
            min_value = min(values)
            max_value = max(values)
            
            # Process each year entry
            for entry in data[key]:
                year = entry['rok']
                if year in population_lookup and region_name in population_lookup[year] and year in multipliers and region_name in multipliers[year]:
                    population = population_lookup[year][region_name]
                    multiplier = multipliers[year][region_name]
                    
                    # Calculate: vydaje / (population * multiplier)
                    if 'vydaje' in entry and population > 0:
                        vydaje = entry['vydaje']
                        result = vydaje / (population * multiplier)
                        
                        # Print detailed calculation info
                        print(f"Rok {year}: {region_name}")
                        print(f"  Výdaje: {vydaje:,} Kč")
                        print(f"  Počet obyvatel: {population:,}")
                        print(f"  Multiplikátor: {multiplier}")
                        print(f"  Výpočet: {vydaje:,} / ({population:,} * {multiplier}) = {result:,.2f} Kč/obyvatele")
                        
                        entry['vydaje_ku_hdp'] = result
                        
                        # Calculate the index
                        index = (result - min_value) / (max_value - min_value) * 100
                        entry['index'] = index
                        modified = True
                else:
                    print(f"Rok {year}: Chybí data pro {region_name}")
            
            # Save the modified data back to the file
            if modified:
                with open(json_file, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                processed_count += 1
                print(f"Soubor {json_file} byl aktualizován")
            
        except Exception as e:
            print(f"Chyba při zpracování {json_file}: {e}")
    
    print(f"\nÚspěšně zpracováno {processed_count} souborů")

if __name__ == '__main__':
    process_json_files()