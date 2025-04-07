/**
 * 자바스크립트
 * - 웹 페이지에서 어떤 동작, 제어를 할 수 있도록 할 수 있는 부분입니다.
 * - 사람으로 비유하면 HTML이 뼈 / CSS가 외모 / JS는 행동,동작을 정의하는 부분입니다.
 */

/**
 * 자료구조: 데이터를 효율적으로 다룰 수 있도록 구분하여 표현된 것입니다.
 * - 맵 (Map)
 * - 키(key) - 값(value)의 쌍으로 이루어져 있으며, 배열처럼 값을 여러개 포함할 수 있습니다.
 * - 하나의 키에는 하나의 값이 저장 될 수 있습니다.
 * 함수
 * 1. size 함수 - 맵의 크기를 나태냅니다. 배열의 length와 같습니다.
 * ex) map.size
 * 
 * 2. set/get 함수 - 맵에 값을 저장/불러올 수 있도록 하는 함수입니다.
 * ex) map.set("아메리카노", 1) -> "아메리카노"를 키로 값 1을 저장
 *     map.get("아메리카노") -> 맵에 저장되어 있는 키 "아메리카노"에 대한 값을 가져옴
 * 
 * 3. has 함수 - 맵에 특정 키 값이 존재하는지 확인하는 함수입니다.
 * ex) map.has("아메리카노") -> 맵에 "아메리카노"키에 대한 값이 존재하는지 확인
 * 
 * 4. 반복문 등으로 map을 출력할때 [키, 값] 의 배열이 순차적으로 출력됩니다.
 * ex) map.set("아메리카노", 3)
 *     map.set("라떼", 1)
 *     ...
 * 
 *     for(var item of map){
 *         item[0] : "키 값이 반복하여 출력"        -> "아메리카노", "라떼" ...
 *         item[1] : "값(value)이 반복하여 출력"    -> 3, 1 ...
 *     }
 */
var orderMap = new Map();

/**
 * 카테고리 이동 함수
 * @param cType : 카테고리종류
 * 
 * 네비게이션 바에 있는 카테고리를 노출합니다.
 */
function moveTo(cType) {
    $('.items').hide();     // item 클래스들을 모두 숨기고
    $('.' + cType).show();  // cType으로 넘어온 카테고리를 노출
}

/**
 * 주문하기 버튼
 */
function order() {
    alert('주문되었습니다.');

    // AJAX, AXIOS, FETCH 등의 함수를 통해 백엔드 서버와 통신 할 수 있습니다.

}

/**
 * 아이템 선택 버튼
 * @param prdNm : 상품명
 * 
 * 선택한 상품명을 주문내역 영역에 추가합니다.
 * 1. 주문내역에 없는 상품인 경우 메뉴 추가
 * 2. 주문내역에 있는 상품인 경우 메뉴 갯수+1
 */
function getItem(prdNm) {

    // 첫주문인 경우
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

    // 주문내역에 있는 아이템을 차례대로 랜더링
    for (var item of orderMap) {
        elem += '<div class="order-list">';
        elem += '<div class="item-name">' + item[0] + '</div>';
        elem += '<div class="item-number">' + item[1] + '</div>';
        elem += '</div>';
    }

    document.getElementById("bLine").innerHTML = elem;

}

/*function 함수명(파라미터) {
    함수내용
}*/