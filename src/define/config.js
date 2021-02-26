export default {
  defaultBrowser: "chrome",
  url: "https://reputa.vn/",
  explicitWaitMS: 2000,
  mochaTimeoutMS: 30000,

  emailForgot: "tesvtel82@yopmail.com",

  //sign up:
  full_name: "tesvtel103",
  emailSignUp: "tesvtel103@yopmail.com",
  usernameSignUp: "tesvtel103@yopmail.com",
  passwordSignUp: "123456aA@@",
  organization_name: "tesvtel103",
  phone: "0905123456",
  industry_id: 66,
  location: 12,

  //add request:
  package_type: 5,
  type: "UPGRADE_PACKAGE",

  //create topic:
  included_keywords:[{
      "main_keywords":["sdsd"],
      "sub_keywords":[]
    }],
  excluded_keywords:[],
  // industry_id:null,
  // type:null,
  market_trending_type:null,
  topic_name:"giang topic",
  topic_source:{"mainstream_news":1,"local_news":1,"journal":1,"high_traffic_news":1,"medium_traffic_news":1,"facebook_user_post":1,"facebook_user_comment":1,"facebook_user_reply":1,"facebook_group_post":1,"facebook_group_comment":1,"facebook_group_reply":1,"facebook_page_post":1,"facebook_page_comment":1,"facebook_page_reply":1,"youtube_video_post":1,"youtube_video_comment":1,"blog":1,"forum":1,"other":1},
  apiCollection: {
    login: "https://apidn.reputa.vn/sso/api/login",
    forgotPassword: "https://apidn.reputa.vn/sso/api/forget-password",
    signup: "https://apidn.reputa.vn/console/register/user",
    addRequest: "https://apidn.reputa.vn/console/user/add-request",
    createTopic: "https://apidn.reputa.vn/console/topic/create-topic"
  }
}
