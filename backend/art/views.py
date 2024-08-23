import requests
from django.http import JsonResponse

def art(request, region):
    url = 'https://collectionapi.metmuseum.org/public/collection/v1/search'
    params = {
        'geoLocation': region, 
        'q': 'flowers',          
        'hasImages': 'true'  
    }
     
    response = requests.get(url, params=params)
    data = response.json()

    objects = data.get('objectIDs', [])
    details = []

    for obj_id in objects:
        object_url = f'https://collectionapi.metmuseum.org/public/collection/v1/objects/{obj_id}'
        object_response = requests.get(object_url).json()
        
        details.append({
            'title': object_response.get('title', 'No title available'),
            'artist': object_response.get('artistDisplayName', 'Unknown artist'),
            'image': object_response.get('primaryImageSmall', None),
            'date': object_response.get('objectDate', 'Date unknown'),
            'description': object_response.get('description', 'No description available'),
        })
        
    return JsonResponse(details, safe=False)