# Feature Focus
Manage Customer Feature Requests

[Preview Feature Focus](http://feature-focus.us-west-2.elasticbeanstalk.com/) on AWS.

To login use your email and your last name as the password.

[Roadmap](https://github.com/CraigDMcKenna/feature-focus/blob/master/ROADMAP.md)

## Installation

**1. Clone this repository**

 ```bash
 $ git clone https://github.com/CraigDMcKenna/feature-focus.git
 ```

 **2. Install Project Dependencies**

 ```bash
 $ npm install
 ```

## Development Setup

 **1. Install Nodemon and Babel CLI**

 ```bash
 $ npm install nodemon -g
```

Feature Focus uses Nodemon to watch server files for changes and
automatically restart the development server when you change them.


**2. Create a config file **config.js** in in the root of the project:**

```javascript
export default {
  rethinkdb: {
    host: '0.0.0.0', // your host ip
    port: 28015,
    authKey: 'yourkey',
    db: 'FeatureFocus'
  },
  secret: 'somesecret' // for Json Web Toke Auth
}
```

** 3. Setup a Rethinkdb Database***

[RethinkDB on aws](https://aws.amazon.com/marketplace/pp/B013R60Q8Y/ref=sp_mpg_product_title?ie=UTF8&sr=0-2)

[Deployment instructions](http://rethinkdb.com/docs/paas/)

or local

Then create tables

  * clients
  * feature_request_history
  * feature_requests
  * products
  * users


insert client(s) product(s) and user(s)

**client schema**

```json
{
"id":  "auto generated" ,
"name":  "Client C"
},
{
"id":  "auto generated" ,
"name":  "Client F"
}
```

**user schema**

```json
{
"email": "you@email.com",
"following": [ ],
"id":  "autogenerated",
"name": {
"first":  "You" ,
"last":  "You"
} ,
"password":  "password"
}
```


**products schema**

```json
{
"id":  "autogenerate" ,
"productName":  "Billing"
}
```


 **2. Starting the Development Server**

 ```bash
 $ npm start
 ```

This will start an Express server with webpack middleware and
hot reloading.  When you see the message ```webpack built``` in
the terminal navigate to **localhost:3000** to view the app
in your browser.

Webpack will watch the ```src/``` files and serve changes in
real time. Typically you will see any changes happen
automatically without the need to refresh your browser.

Some changes to the source files may require manual browser
refresh.

Most webpack compile time errors will be displayed
directly on the page in your browser.

**Notes Regarding Development:**

*  If you are not seeing your changes in the browser even
   after refresh and there are no errors on the page check the
   terminal for additional error messages. Nodemon can be
   restarted from the command line by entering the ```rs```.
   command. When all else fails terminate the process
   and restart with ```npm start```.

*  The dev server is configured with source maps for easier debugging.

**3. Build**

When you are ready for production you need to build/bundle
the the app first.

```bash
$ npm run build
```
This will build the app to the **public/** directory for production.
When the webpack build process is complete the app is ready to deploy.

## Deploy
Deploy to AWS EC2 using Elastic Beanstalk.

**2. Install the AWS CLI and setup**

**Requires Python and pip.*

```bash
$ pip install awscli

$ aws configure

$ eb init
```

[aws cli docs](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)


**4. Deploy

```bash
$ eb create

$ eb deploy

$ eb open
```
