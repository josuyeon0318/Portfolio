var orderMap = new Map();

function moveTo(cType) {
    $('.items').hide();    
    $('.' + cType).show();  
}

function order() {
    alert('주문되었습니다.');

    // 주문 완료 후 주문 리스트 초기화
    orderMap.clear();
    document.getElementById("bLine").innerHTML = ""; // 주문표 화면에서 삭제
}

function getItem(prdNm) {
    // 첫 주문인 경우
    if (orderMap.size == 0) {
        orderMap.set(prdNm, 1);
    } else {
        // 이후 주문
        if (orderMap.has(prdNm)) {
            // 주문내역에 기존 아이템이 있을 경우 -> 갯수 +1
            orderMap.set(prdNm, orderMap.get(prdNm) + 1);
        } else {
            // 기존 주문 내역이 없는 경우 추가
            orderMap.set(prdNm, 1);
        }
    }

    var elem = "";

    for (var item of orderMap) {
        elem += '<div class="order-list">';
        elem += '<div class="item-name">' + item[0] + ' <span class="item-number">(' + item[1] + '개)</span></div>';
        elem += '</div>';
    }

    document.getElementById("bLine").innerHTML = elem;
}