# Hungry Hungry Hipster

Standing in line is so 2016.


## Install

```
git clone https://github.com/atxtab/hackathon.git
```

## Built With

* JavaScript
* React
* Flask
* Twilio

### Prerequisites for Flask API

```
brew install python
brew install pip
pip install flask
```

## API Reference

Get All Vendors:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/vendors
```

Get Specific Vendors:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/vendors/<vendor_id>
```

Create A New Vendor:
```
METHOD: POST
ARGUMENTS: vendor_name, vendor_description, vendor_logo
http://localhost:5000/atxtab/api/v1.0/vendors
```

Create A New Vendor Item:
```
METHOD: POST
ARGUMENTS: item_name, item_price, item_wait_period, item_url
http://localhost:5000/atxtab/api/v1.0/vendors
```

Get All Users:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/users
```

Get Specific User:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/users/<user_id>
```

Get All Orders:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/orders
```

Get Specific Order:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/orders/<order_id>
```

Get Specific Order Stats:
```
METHOD: GET
http://localhost:5000/atxtab/api/v1.0/orders/<order_id>/stats
```


## GitHub Authors

* **Sarah Dykema Hampton** - *API* - [dykemasarah](https://github.com/dykemasarah)
* **Lauren Schroeder** - *JavaScript/React - Vendor Screen* - [laurenschroeder](https://github.com/laurenschroeder)
* **Brigitte Huneke** - *JavaScript/React - User Screen* - [bhuneke](https://github.com/bhuneke)
* **Brigitte Huneke** - *JavaScript/React - User Screen*



See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.


