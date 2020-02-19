// let topStoryText = "Jenn and Chris Join Forces to Make a Super Cohort!"
// let topStoryPhotos = ["https://avatars.githubusercontent.com/u/36425627", "https://avatars.githubusercontent.com/u/28542439"]

let trendingStories = ["Another student got a great coding job!", "Flatiron sees more students than ever!", "New Campus in San Francisco!"]

//1. Select the element where we want to make the change

let trendingUl = document.getElementById("trending-stories-list")

//2. Iterate over the information that I want to append, create an HTML/DOM element for it, and then put it on the DOM

trendingStories.forEach(story => {
  let storyElement = document.createElement('li')
  //<li></li>>>
  storyElement.innerText = story
  trendingUl.appendChild(storyElement)
})

// let students = [
//   {name: "Jesse", photo: "https://avatars.githubusercontent.com/u/56096228"},
//   {name: "Anna", photo: "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/a085a510-a15b-4a0c-8150-ac52dcfd5168/avatar.jpeg"},
//   {name: "Emmanuel", photo: "https://avatars.githubusercontent.com/u/12989615"},
//   {name: "Mary", photo: "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/b75f323a-3053-43e8-a7f1-a006dc6a8bf3/avatar.jpeg"}
// ]
