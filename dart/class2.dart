import 'dart:io';
void main(){
//   List<String> testList=[];
// testList.add("1");
// testList.addAll("1","2","3");
// print(testList);

int? x;
//this questioon mark signifies that it can take null value
//difference between final and const;

final time=DateTime.now();
const abc="abc";
// both are immutable
//const is compile time 
//final is runtim
//but in runtime it saves memory, but it lags in processing time
final time2=DateTime.now();

print(time);
print(abc);
print(time2);
print(time==time2);

}