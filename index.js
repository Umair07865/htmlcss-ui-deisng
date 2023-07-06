//targetting the elements

var targetWrapping= document.querySelector(".WrapperDivLeft");
var arrayData=[
    {
        name:"Sylvan Strosin",
        time:"2:30pm",
        message:"it is a long established fact that..",
        img:"https://t4.ftcdn.net/jpg/00/50/44/73/360_F_50447326_L9AMbYQ6SkoW18JoyhCgaHhAb7Qjx4A8.jpg"

    },
    {
        name:"Cleveland Schilleer",
        time:"5:15pm",
        message:"it is a long established fact that..",
        img:"https://img.freepik.com/premium-photo/young-businessman-outdoor-modern-setting_53419-11374.jpg"
    },
    {
        name:"Bella Donnelly",
        time:"2:00pm",
        message:"it is a long established fact that..",
        img:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },

    {
        name:"Marquise Morissette",
        time:"5:45pm",
        message:"it is a long established fact that..",
        img:"https://m.media-amazon.com/images/M/MV5BMWJlYTg3OWYtYjQ1Mi00ZWQ4LWI1MWMtMTNjNTllYmU5ZTU1XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg"

    },
    {
        name:"Cooper McCullough",
        time:"12:25pm",
        message:"it is a long established fact that..",
        img:"https://spectrum.ieee.org/media-library/image.jpg?id=26144683"

    },  {
        name:"Febian Torp",
        time:"10:00pm",
        message:"it is a long established fact that..",
        img:"https://2.gravatar.com/avatar/7a5d88402c2d1c9e8bb9c11d35c3e819?s=320"

    },  {
        name:"Lloyd Rodriguez",
        time:"4:00pm",
        message:"it is a long established fact that..",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRnU3R1wvljDk9gCGJTSLm80nfiLAkuZeL313wD8Y4c0-SD3GB4HIXWTINBYFwr-GEXfU&usqp=CAU"

    }
]

let postlist="";
arrayData.map((values)=>{
    postlist+=`<table class="mt-3">
    <tr>
      <td rowspan="2">
      <img src="${values.img}" alt="profile" class="profilePicture m-2">
      </td>
      <td class="d-flex justify-content-between">

        <span class="span1">${values.name}</span>
        <span>${values.time}</span>
        
      </td>
    </tr>
    <tr>
      <td>
      ${values.message}

      </td>
    </tr>
  </table>
  <hr class=" bg-light">`


});
targetWrapping.innerHTML+=postlist;
