import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SET_USERNAME,
  MAKE_TWEET,
  FOLLOW_HIM
} from "./actionTypes";

const initState = {
  isAuth: false,
  error: false,
  token:"",
  username:"",
  userInfo:{},
  following:[],
  tweets:[],
  generatedData:[
    {username:"Manish@sharma",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE-Ffzo49Drm4fJBd5w3Kz5CB_XbCirt69X6jWXxRhLvZHNvSc",
    email:"manish@masai.com",
    tweets:["My first crush is a shadow, and I want to go faster. More insane rope, my friend. #globalball #randomtweet","My dad is really confusing, and I want to create something. For all awkward trials, bro. #intimategate #randomtweet","My diet is paid for, and I want to get ahead. Come for the faster weather, for real. #sunsetdancing #randomtweet","My diet is being a jerk, and I want to get a new mattress. For all free family, in the end. #thisbag #randomtweet"],
    followers:[]
  },
  {username:"Dipanshu@sabharwal",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgq4PthLT913LZ67uHsH8jMgxb48U7_sL9mo7-h811QmLKXXrI",
    email:"dipanshu@masai.com",
    tweets:["My band is a pain, and I want to get more retweets. A path towards silly family, forever. #dinkysport #randomtweet","My normal twitter is so robust, and I want to be heard. Fabulous insane bag, in a way. #nonut #randomtweet","My car is debt free, and I want to be all I can be. Everyone needs good love, for real. #malted2u #randomtweet","My dance routine is getting old, and I want to be safer. A hint of great robots, so it goes. #sunsettag #randomtweet","My brother is way too tight, and I want to learn meditation. More clammy criminals, forever. #cool4ever #randomtweet"],
    followers:[]
  },
  {username:"Aalind@sharma",
  photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk45aCcKIXm2SWuK4nYpW7G9fCnGy930Llt5RWZtWAJiaO5F9D",
    email:"aalind@masai.com",
    tweets:["My best friend is way too tight, and I want to die trying. We need funky romances, really. #nopeople #randomtweet","My name is a joy, and I want to be heard. Unlikely mail order homes, bro. #nodisease #randomtweet","My name is cramping my style, and I want to change. A clear case of talented neighbors, bro. #slickbite #randomtweet","My ringtone is a fairytale, and I want to pluck a cactus. More grand family, man. #stickyball #randomtweet","My creativity is paid for, and I want to slow down. I care about stellar weather, man. #bunnywad #randomtweet"],
    followers:[]
  },
  {username:"Gaurav@arya",
  photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXs02-3WhmCy9AfC7Y2Cumen9JYHQfu2cewgMfH6D6dh27wFAO",
    email:"gaurav@masai.com",
    tweets:["My financial situation is hard labor, and I want to cut back. You've got good candy, in a way. #badball #randomtweet","My job is funky, and I want to learn meditation. Excellent stoic neighbors, my friend. #powermacaroni #randomtweet","My existence is amazing, and I want to play hacky sack. Historically perfect fruit, really. #dumbeats #randomtweet","My better half is so robust, and I want to level up. For all perfect candy, kinda. #dinoball #randomtweet"],
    followers:[]
  },
  ]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        error:false,
        token:action.payload.token 
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false 
      };
    case SET_USERNAME:
      return {
        ...state,
        username:action.payload
      };
     case MAKE_TWEET :
       let newTweet=state.tweets
       return{
         ...state,
         tweets:[...newTweet,action.payload]
       }
     case FOLLOW_HIM:
       let newToFollow=state.following
       return{
         ...state,
         following:[...newToFollow,action.payload]
       }  
    default:
      return state;
  }
};

export default reducer;
