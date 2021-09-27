
class CountdownTimer {
  constructor({targetDate, selector}) {
    this.targetDate = targetDate;
    this.selector = selector;
    setInterval(
      this.onTick.bind(this)
    , 1000)
  }
  onTick(){
    this.time = this.targetDate - new Date()
    const daysValue = document.querySelector('.days');
  const hoursValue = document.querySelector('.hours');
  const minsValue = document.querySelector('.mins');
  const secsValue = document.querySelector('.secs');
  const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));    
  const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((this.time % (1000 * 60)) / 1000);
  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minsValue.textContent = mins;
  secsValue.textContent = secs;
  }

}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 17, 2022'),
})
  
  