// Javascript program to find day of a given date
 
function dayofweek(d, m, y)
{
    let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
    // if(m<3) y=y-1;
    y -= (m < 3) ? 1 : 0;
    return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
}
function weekday(D_day) {
    switch (D_day) {
        case 1:
            console.log("It's sunday")
            break;
        case 2:
            console.log("It's Monday")
            break;
        case 3:
            console.log("It's Tuesday")
            break;
        case 4:
            console.log("It's Wednesday")
            break;
        case 5:
            console.log("It's Thursday")
            break;
        case 6:
            console.log("It's Friday")
            break;
        case 7:
            console.log("It's Saturday")
            break;
        default:
            break;
    }
    
}
 
let day = dayofweek(15,5,2023);
let final=Math.round(day)
console.log(final);
weekday(final)
