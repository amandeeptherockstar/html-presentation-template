var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

// const element = document.body;
// const hjs = new Hammer(element);

// // add listener
// hjs.on('panup', function(event) {
//   console.log(event.type);
//   const sectionId = event.srcEvent.path.find(el => el.tagName === 'SECTION').id;
//   console.log(sectionId);
//   const sectionNumber = parseInt(sectionId.split('-')[1]);
//   console.log(sectionNumber);
//   if(sectionNumber >= 1 && sectionNumber < 4){
//     console.log('section-' + (sectionNumber - 1));
//     element.scrollIntoView('section-' + (sectionNumber - 1));
//   }
//   return;
//   // console.log(event.srcEvent.path);
// });

// hjs.on('pandown', function(event) {
//   console.log(event.type);
//   // console.log(event);
//   const sectionId = event.srcEvent.path.find(el => el.tagName === 'SECTION').id;
//   console.log(sectionId);
//   const sectionNumber = parseInt(sectionId.split('-')[1]) + 1;
//   console.log(sectionNumber);
//   if(sectionNumber > 1 && sectionNumber <= 4){
//     console.log('section-' + sectionNumber);
//     element.scrollIntoView('section-' + sectionNumber);
//   }
//   return;
// });