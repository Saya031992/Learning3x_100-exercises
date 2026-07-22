let responseTime=850;
let sla=1000;
let slastatus=responseTime<=sla?"Within  Sla":"SLA breached";
console.log('Response: ${responseTime}ms - ${slaStatus}');

//sla--service level  agrrrement
//template literal are used  wiith '' with $ in it
console.log('What is the sla time? - ${sla}');