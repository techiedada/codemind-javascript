function weekDay(dayNum){
    switch (dayNum) { // 8
      case 1:
          console.log(`${dayNum} - Monday`);
          break;
      case 2:
          console.log(`${dayNum} - Tue`);
          break;
      case 3:
          console.log(`${dayNum} - Wed`);
          break;
      case 4:
          console.log(`${dayNum} - Thur`);
          break;
      case 5:
          console.log(`${dayNum} - Fri`);
          break;
      case 6:
          console.log(`${dayNum} - Saturday`);
          break;
      case 7:
          console.log(`${dayNum} - Sunday`);
          break;
      default:
          console.log(`Invalid Data: ${dayNum}`);
          break;
    }
  }
  weekDay(9);
  // 1 -- Monday
  // 2 -- Tuesday
  // 3 -- Wed
  // 7 -- Sunday