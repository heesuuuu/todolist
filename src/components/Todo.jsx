import React from 'react'

const Todo = () => {
  return (
    <div>
      <div>
        <strong>2024.04.22</strong>
        <p>오늘의 할 일을 적어보세요.</p>
      </div>
      <div>
        <strong>새로운 Todo 작성하기</strong>
        <input type="text" placeholder='할 일을 추가로 입력해 주세요.'></input>
        <button>할 일 추가</button>
      </div>
      <div>
        <strong>할 일 목록</strong>
        <input type="text" placeholder='검색어를 입력하세요'></input>
        <ul>
            <li>
                <strong>고양이 밥주기</strong>
                <span>2024.04.22</span>
                <button>삭제</button>
            </li>
            <li>
                <strong>감자 캐기</strong>
                <span>2024.04.22</span>
                <button>삭제</button>
            </li>
            <li>
                <strong>고양이 놀아주기</strong>
                <span>2024.04.22</span>
                <button>삭제</button>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Todo
