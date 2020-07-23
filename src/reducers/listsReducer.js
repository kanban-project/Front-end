const initialState = [
    {
        title: "첫번째 태스크",
        id: 0,
        cards: [
            {
                id: 0,
                text: "테스트1"
            },
            {
                id: 1,
                text: "테스트2"
            }
        ]
    },
    {
        title: "두번째 태스크",
        id: 0,
        cards: [
            {
                id: 0,
                text: "테스트3"
            },
            {
                id: 1,
                text: "테스트4"
            },
            {
                id: 2,
                text: "테스트5"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default listsReducer;