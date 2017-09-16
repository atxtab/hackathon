#!flask/bin/python

from flask import abort, request, Flask, jsonify, make_response

app = Flask(__name__)

users = [
   {
        'id': 1,
        'first_name': u'Leo',
        'last_name': u'DiVinci',
        'address_1': u'701 Brazos',
        'address_2': u'',
        'city': u'Austin',
        'state': u'Texas',
        'zip': u'78706',
        'status': u'active',
        'phone': u'512-123-2345',
        'credit_cards': [ 
            {
                 'saved_cc_name': u'primary card',
                 'cc_number': u'12345678899',
                 'expiration_date': u'01/18',
                 'num_back': u'412',
                 'active': u'true'
            },
            {
                 'saved_cc_name': u'backup card',
                 'cc_number': u'12345678899',
                 'expiration_date': u'01/18',
                 'num_back': u'412',
                 'active': u'false'
            }
        ]
    },
   {
        'id': 2,
        'first_name': u'Harrison',
        'last_name': u'Ford',
        'address_1': u'703 Brazos',
        'address_2': u'',
        'city': u'Austin',
        'state': u'Texas',
        'zip': u'78706',
        'status': u'active',
        'phone': u'512-233-2345',
        'credit_cards': [
            {
                 'saved_cc_name': u'primary card',
                 'cc_number': u'1324235678899',
                 'expiration_date': u'02/18',
                 'num_back': u'413',
                 'active': u'true'
            },
            {
                 'saved_cc_name': u'backup card',
                 'cc_number': u'12234678899',
                 'expiration_date': u'06/18',
                 'num_back': u'432',
                 'active': u'false'
            }
        ]
    }
]



vendors = [
   {
        'id': 1,
        'vendor_name': u'Slab BBQ',
        'vendor_logo': u'http://realdopebbq.com/wp-content/themes/realdopebbq/images/logo.png',
        'vendor_description': u'Completely delicious BBQ',
        'items': [
            {
                 'item_id': u'1',
                 'item_name': u'Notorious P.I.G.',
                 'item_description': u'Slabs original BBQ classic. Pulled pork topped with mustard cole slaw and backyard red',
                 'item_price': u'7.50',
                 'item_wait_time': u'5',
                 'item_url': u'https://farm5.staticflickr.com/4428/35966397574_378af3f24e.jpg',
                 'active': u'true'
            },
            {
                 'item_id': u'2',
                 'item_name': u'Texas O.G.',
                 'item_description': u'Texas classic BBQ sandwitch. Prime Angus brisket topped with pickes, onions, and backyard red.',
                 'item_price': u'9.00',
                 'item_wait_time': u'7',
                 'item_url': u'https://farm9.staticflickr.com/8186/8351713851_e638159d8b.jpg',
                 'active': u'true'
            }
         ]
    },
    {
        'id': 2,
        'vendor_name': u'East Side King',
        'vendor_logo': u'https://37b7056d31190ef2fa7a-433f921b39a1bc4f0ccf711eb1902eb5.ssl.cf2.rackcdn.com/de14f8a3fb0e4bd69acc523e54839de5.png',
        'vendor_description': u'Completely delicious Thai',
        'items': [
            {
                 'item_id': u'1',
                 'item_name': u'Thai Chicken Kara-Age',
                 'item_description': u'Deep-fried chicken thigh sweet & spicy sauce basil cilantro mint onion jalapeno',
                 'item_price': u'8.50',
                 'item_wait_time': u'6',
                 'item_url': u'https://farm3.staticflickr.com/2067/2937919437_156fd31b61.jpg',
                 'active': u'true'
            },
            {
                 'item_id': u'2',
                 'item_name': u'Beet Home Fries',
                 'item_description': u'Deep-fried roasted beets, Kewpie mayo, shichimi togarashi, green onion',
                 'item_price': u'7.50',
                 'item_wait_time': u'5',
                 'item_url': u'https://farm8.staticflickr.com/7280/8151301434_66aa0d6d5a.jpg',
                 'active': u'true'
            }
         ]
    },
    {
        'id': 3,
        'vendor_name': u'Burro Cheese Kitchen',
        'vendor_logo': u'http://www.burrocheesekitchen.com/wp-content/uploads/2013/02/Burro_shield.png',
        'vendor_description': u'Completely delicious Cheese',
    }
]


# Here is the User Data GET REQUESTS
@app.route('/atxtab/api/v1.0/users', methods=['GET'])
def get_users():
    return jsonify({'users': users})

@app.route('/atxtab/api/v1.0/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = [user for user in users if user['id'] == user_id]
    if len(user) == 0:
        abort(404)
    return jsonify({'user': user[0]})

#########################
# Here is the Vendor Data GET REQUESTS
#########################
@app.route('/atxtab/api/v1.0/vendors', methods=['GET'])
def get_vendors():
    return jsonify({'vendors': vendors})

@app.route('/atxtab/api/v1.0/vendors/<int:vendor_id>', methods=['GET'])
def get_vendor(vendor_id):
    vendor = [vendor for vendor in vendors if vendor['id'] == vendor_id]
    if len(vendor) == 0:
        abort(404)
    return jsonify({'vendor': vendor[0]})

@app.route('/atxtab/api/v1.0/vendors/<int:vendor_id>/items/<int:item_id>', methods=['GET'])
#def get_vendor(vendor_id):
#    vendor = [vendor for vendor in vendors if vendor['id'] == vendor_id]
#    if len(vendor) == 0:
#        abort(404)
#    return jsonify({'vendor': vendor[0]})
def get_item(item_id):
    item = [item for item in items if item['id'] == item_id]
    if len(item) == 0:
        abort(404)
    return jsonify({'item': item[0]})


#########################
# Here is Vendor Data POST REQUESTS
#########################
@app.route('/atxtab/api/v1.0/vendors', methods=['POST'])
def create_vendors():
    if not request.json or not 'vendor_name' in request.json:
        abort(400)
    vendor = {
        'id': tasks[-1]['id'] + 1,
        'vendor_name': request.json['vendor_name'],
        'vendor_description': request.json.get('vendor_description', ""),
        'vendor_logo': request.json.get('vendor_logo', ""),
    }
    vendors.append(vendor)
    return jsonify({'vendor': vendor}), 201


#########################
# examples
#########################

@app.route('/atxtab/api/v1.0/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

@app.route('/atxtab/api/v1.0/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    return jsonify({'task': task[0]})

@app.route('/atxtab/api/v1.0/tasks', methods=['POST'])
def create_task():
    if not request.json or not 'title' in request.json:
        abort(400)
    task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'description': request.json.get('description', ""),
        'done': False
    }
    tasks.append(task)
    return jsonify({'task': task}), 201

@app.route('/atxapi/api/v1.0/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    if not request.json:
        abort(400)
    if 'title' in request.json and type(request.json['title']) != unicode:
        abort(400)
    if 'description' in request.json and type(request.json['description']) is not unicode:
        abort(400)
    if 'done' in request.json and type(request.json['done']) is not bool:
        abort(400)
    task[0]['title'] = request.json.get('title', task[0]['title'])
    task[0]['description'] = request.json.get('description', task[0]['description'])
    task[0]['done'] = request.json.get('done', task[0]['done'])
    return jsonify({'task': task[0]})

@app.route('/atxapi/api/v1.0/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    task = [task for task in tasks if task['id'] == task_id]
    if len(task) == 0:
        abort(404)
    tasks.remove(task[0])
    return jsonify({'result': True})

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=True)
