// var orderMap = new Map();

// function moveTo(cType) {
//     $('.items').hide();    
//     $('.' + cType).show();  
// }

// function order() {
//     alert('주문되었습니다.');

//     // 주문 완료 후 주문 리스트 초기화
//     orderMap.clear();
//     document.getElementById("bLine").innerHTML = ""; // 주문표 화면에서 삭제
// }

// function getItem(prdNm) {
//     // 첫 주문인 경우
//     if (orderMap.size == 0) {
//         orderMap.set(prdNm, 1);
//     } else {
//         // 이후 주문
//         if (orderMap.has(prdNm)) {
//             // 주문내역에 기존 아이템이 있을 경우 -> 갯수 +1
//             orderMap.set(prdNm, orderMap.get(prdNm) + 1);
//         } else {
//             // 기존 주문 내역이 없는 경우 추가
//             orderMap.set(prdNm, 1);
//         }
//     }

//     var elem = "";

//     for (var item of orderMap) {
//         elem += '<div class="order-list">';
//         elem += '<div class="item-name">' + item[0] + ' <span class="item-number">(' + item[1] + '개)</span></div>';
//         elem += '</div>';
//     }

//     document.getElementById("bLine").innerHTML = elem;
// }
var orderMap = new Map();
var priceMap = new Map([
    ["아메리카노", 2500],
    ["라떼", 3000],
    ["유자차", 3500],
    ["얼그레이", 4000],
    ["페퍼민트", 4000],
    ["아이스초코", 4500],
    ["아이스티", 3000],
    ["레몬에이드", 3500],
    ["오렌지주스", 2500],
    ["티라미수", 6000]
]);

function moveTo(cType) {
    $('.items').hide();    
    $('.' + cType).show();  
}

function order() {
    alert('주문되었습니다.');

    // 주문 완료 후 주문 리스트 초기화
    orderMap.clear();
    document.getElementById("bLine").innerHTML = "";
}

function getItem(prdNm) {
    // 주문 수량 업데이트
    if (orderMap.has(prdNm)) {
        orderMap.set(prdNm, orderMap.get(prdNm) + 1);
    } else {
        orderMap.set(prdNm, 1);
    }

    // 주문 내역 및 총액 출력
    var elem = "";
    var total = 0;

    for (var [name, count] of orderMap) {
        var price = priceMap.get(name) || 0;
        var itemTotal = price * count;
        total += itemTotal;

        elem += '<div class="order-list">';
        elem += '<div class="item-name">' + name + 
                ' <span class="item-number">(' + count + '개)</span>' +
                ' - <span class="item-price">' + itemTotal.toLocaleString() + '원</span></div>';
        elem += '</div>';
    }

    elem += '<div class="total-price">총 금액: <strong>' + total.toLocaleString() + '원</strong></div>';

    document.getElementById("bLine").innerHTML = elem;
}

function getItem(prdNm) {
    if (orderMap.has(prdNm)) {
        orderMap.set(prdNm, orderMap.get(prdNm) + 1);
    } else {
        orderMap.set(prdNm, 1);
    }

    let elem = "";
    let total = 0;

    for (let [name, count] of orderMap) {
        const price = priceMap.get(name) || 0;
        const itemTotal = price * count;
        total += itemTotal;

        elem += `
            <div class="order-list">
                <div class="item-name">
                    ${name} <span class="item-number">(${count}개)</span>
                    - <span class="item-price">${itemTotal.toLocaleString()}원</span>
                </div>
            </div>
        `;
    }

    // 총 금액을 주문표 내부에 포함
    elem += `
        <div class="total-price">
            총 금액: ${total.toLocaleString()}원
        </div>
    `;

    document.getElementById("bLine").innerHTML = elem;
}

function order() {
    alert('주문되었습니다.');
    orderMap.clear();
    document.getElementById("bLine").innerHTML = "";
}

function order() {
    if (orderMap.size === 0) {
        alert("주문한 항목이 없습니다.");
        return;
    }

    let summary = "🧾 주문 내역:\n\n";
    let total = 0;

    for (let [name, count] of orderMap) {
        const price = priceMap.get(name) || 0;
        const itemTotal = price * count;
        total += itemTotal;
        summary += `- ${name} (${count}개) : ${itemTotal.toLocaleString()}원\n`;
    }

    summary += `\n총 금액: ${total.toLocaleString()}원\n\n주문되었습니다. 감사합니다!`;

    alert(summary);

    // 주문 초기화
    orderMap.clear();
    document.getElementById("bLine").innerHTML = "";
}
