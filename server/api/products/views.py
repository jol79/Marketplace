import json
from django.shortcuts import render
from django.http import JsonResponse
from .models import Products, Sellers
from ast import literal_eval


def homePage(request):
    """Returns the list of items available on the market (GET)"""

    itemsData = Products.objects.filter()

    try:
        data = {
            item.id: {
                "name": item.name,
                "price": item.price,
                "image": item.image,
                "description": item.description,
                "seller": {
                    "name": item.seller.name,
                    "phone": item.seller.phone
                }
            } for item in itemsData
        }
    except: data = { "empty": True }

    return JsonResponse(data, safe=False)


def itemPage(request):
    """Returns the data for the item selected by the user (GET)"""

    if request.method != "GET":
        return JsonResponse({ "error": "This url only for the GET requests!" }, safe=False)

    requestBody = request.body.decode('utf-8')

    try:
        requestBody_json = json.loads(requestBody)
        itemData = Products.objects.get(id=int(requestBody_json['id']))
    except: pass

    try: 
        data = {
            'product_name': itemData.name,
            'product_price': itemData.price,
            'product_description': itemData.description,
            'seller_name': itemData.seller.name,
            'seller_phone': itemData.seller.phone
        }
    except: data = { "empty": True }

    return JsonResponse(data, safe=False)
