Frameworks used :
  1. Backend
     - Express ( For Server Creation to Listen the Incomming Request )
     - Mongoose ( For connecting App to Database )
     - dotenv ( For info that shouldn't visible  )
     - bcryptjs ( Converting Passwords into hash )
     - Cookie parser ( Authentication Security )
     - jsonwebToken ( For Authentication )
     - Cloudinary ( Image Storage Container )
  2. Frontend
     - React hot taast ( For Notification )
     - React Router ( Links for Exploring the App )
     - Tailwind Css ( For Styling the App )
     - Zustand ( 3rd party State Managment tool )
     - Axios ( Alternative for Fetch )
     - React Icons ( For logo and icons )
     
       
Not Implemented Feature : 
  - Realtime Chat update (Need to refresh everytime to see a updated message) using Socket.io
  - Not implemented Single Port Application (as Frontend and Backend runs in Different port)
  - Haven't Done the Production Build application
  - Not Implemented Decoration Component in login and signup pages
    
  
  How to Start the Project  
  
  Step 1. Start the Backend Server 
           For Below command to work we need to move to the " cd backend " path 
           Install the Node modules with the help of ( npm i )
           - npm run dev (Development Mode)


    Step 2. Start the Frontend Server 
           For Below command to work we need to move to the " cd frontend " path 
            Install the Node modules with the help of ( npm i )
           - npm run dev
           
    Step 3 : Go to the http://localhost:5173/ to test the application


  Features Installations :
    In order to implement Cloudinary and Mongodb features , you must have the following in your .env file 

    
    Cloudinary:
    1. Cloudinary Name
    2. Cloudinary Api Key
    3. Cloudinary Secret
    
    Mongodb :
      1. Mongodb Uri

    jsonWebtoken :
      1. JWT Secret (a string which is used to convert password into hash)
   
NOTE: This is a open Source project , Feel free to explore and do the necessary changes 
