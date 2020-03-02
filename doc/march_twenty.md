
# Steps - 
Create new git repo. 
Commit all small changes

### Backend -
- Create a Rails Project - 
- Add 3 models
- Establish asociations amoung them
- Add columns/attributes under each table
- Prepare backend/test it in backend rails c
- Add 1 controller and 1 action may be front page/index of launching page of app
- Add some dummy data add seed script to load some sort of dummy data	
### Frontend -
- Basic first page design - search for template to add directly
- Add React dependency -
- Show basic data	-

Let's begin 
```
rvm install 2.7.0
rvm use 2.7.0
rvm gemset create march_twenty
rvm gemset use march_twenty
rvm current
gem list
gem install rails 
rails new march_twenty
rails s
rails webpacker:install

rails s

rails g model bravo name
rails g model alpha bravo:references name
rails g model tango alpha:references first last email phone:integer
rails g model charli tango:references first last email phone:integer

rake db:create
rake db:migrate
```


### model / attributes / assocoations -
**bravo**
1. name

`bravo -m-> alpha` 

**alpha**
1. 	name

`alpha -1-> tango`

**tango**
1. 	first
2. 	last
3. 	email
4. 	phone

`tango -1-> charli`

**charli**
1. 	first
2. 	last
3. 	email
4. 	phone
