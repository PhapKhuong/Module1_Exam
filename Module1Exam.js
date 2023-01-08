// Câu 1:
function findAverage()
    {
        let numbers = [];
        let len = +prompt("Nhập vào độ dài của mảng");
        let sum = 0;
        let count = 0;
        for (let i = 0; i < len; i++)
            {
                numbers[i] = +prompt("Nhập vào phần tử thứ " + i);
                if (numbers[i] % 3 === 0)
                    {
                        sum += numbers[i];
                        count += 1;
                    };
            };
        document.getElementById("result11").innerText = "Mảng nhập vào là: " + numbers.join("; ");
        document.getElementById("result12").innerText = "Trung bình cộng các số chia hết cho 3 là: " + sum/count;
    };

// Câu 2:
function checkNum()
    {
        let x = +document.getElementById("num").value;
        let sum = 0;
        for (let i = 1; i < x; i++)
            {
                if (x % i === 0) sum += i;
            };
        if (sum === x) document.getElementById("result2").innerText = x + " là số hoàn hảo";
        else document.getElementById("result2").innerText = x + " không phải là số hoàn hảo";
    };

// Câu 3:
function countDate()
    {
        let month = prompt ("Nhập vào một tháng mm/yyyy");
    
        if (!checkInput(month))
            {
                alert ("Nhập lại tháng mm/yyyy");
                return;
            };

        let m = +month.slice(0, 2);
        let y = +month.slice(3, 7);

        if (m === 2)
            {
                if (testLeapYear(y)) document.getElementById("result3").innerText = "Tháng" + month + " có 29 ngày";
                else document.getElementById("result3").innerText = "Tháng" + month + " có 28 ngày";
            }
        else if (checkMonth(m)) document.getElementById("result3").innerText = "Tháng" + month + " có 31 ngày";
        else document.getElementById("result3").innerText = "Tháng" + month + " có 30 ngày";
    };

function checkInput(inputDate)
    {   
        let num1 = +inputDate.slice(0, 2);
        let str = inputDate.slice(2, 3);
        let num2 = +inputDate.slice(3, 7);

        if (isNaN(num1)) return false;

        if (num1 > 0 && num1 < 13)
            {
                if (str === "/")
                    {
                        if (num2 > 0) return true;
                    }
            }
    };

function checkMonth(month)
    {
        switch (month)
            {    
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return true;
            };
    };

function testLeapYear(yyyy)
    {
        let isLeapYear = false;

        if (yyyy % 4 === 0)
            {
                if (yyyy % 100 === 0)
                    {
                        if (yyyy % 400 !== 0)
                            {
                                isLeapYear = true;
                            }
                    }
            }

        if (isLeapYear) return true;
        //Không phải là năm nhuận
    };

// Câu 4:
class Worker
    {
        constructor (id, name, birthday, add, payment, position)
            {
                this.id = id;
                this.name = name;
                this.birthday = birthday;
                this.add = add;
                this.payment = payment;
                this.position = position
            };
        setId (newId)
            {
                this.id = newId;
            };
        setName (newName)
            {
                this.name = newName;
            };

        setBirthday (newBirthday)
            {
                this.birthday = newBirthday;
            };

        setAdd (newAdd)
            {
                this.add = newAdd;
            };
        setPayment (newPayment)
            {
                this.payment = newPayment;
            };
        setPosition (newPosition)
            {
                this.position = newPosition;
            };
    };

let workers = [];

function update()
    {
        let tableWorkers = 
            '<table style="border: 1px solid blue">' +
                '<tr>' +
                    '<th style="width: 80px; border: 1px solid blue">STT</th>' +
                    '<th style="width: 180px; border: 1px solid blue">Họ và tên</th>' +
                    '<th style="width: 60px; border: 1px solid blue">Ngày sinh</th>' +
                    '<th style="width: 200px; border: 1px solid blue">Địa chỉ</th>' +
                    '<th style="width: 100px; border: 1px solid blue">Lương</th>' +
                    '<th style="width: 100px; border: 1px solid blue">Chức vụ</th>' +
                '</tr>';
        for (let i = 0; i < workers.length; i++)
            {
                tableWorkers +=
                    '<tr>' +
                        '<td style="text-align: center; border: 1px solid blue">' + workers[i].id + '</td>' +
                        '<td style="border: 1px solid blue">' + workers[i].name + '</td>' +
                        '<td style="text-align: center; border: 1px solid blue">' + workers[i].birthday + '</td>' +
                        '<td style="text-align: center; border: 1px solid blue">' + workers[i].add + '</td>' +
                        '<td style="text-align: center; border: 1px solid blue">' + workers[i].payment + '</td>' +
                        '<td style="text-align: center; border: 1px solid blue">' + workers[i].position + '</td>' +
                    '</tr>';
            };
        tableWorkers += '</table>';
        document.getElementById('result4').innerHTML = tableWorkers;
    };

function createWorker()
    {
        let worker = new Worker();
        
        let inputId = +prompt ("Nhập thông tin Mã công nhân");
        worker.setId(inputId);
  
        let inputName = prompt ("Nhập thông tin Họ và tên");
        worker.setName(inputName);

        let inputBirthday = prompt ("Nhập thông tin Ngày sinh");
        worker.setBirthday(inputBirthday);

        let inputAdd = prompt ("Nhập thông địa chỉ");
        worker.setAdd(inputAdd);

        let inputPayment = prompt ("Nhập thông tin Lương");
        worker.setPayment(inputPayment);

        let inputPosition = prompt ("Nhập thông Chức vụ");
        worker.setPosition(inputPosition);

        workers.push(worker);
        update();
        return workers; 
    };

function sortWorker()
    {

    };