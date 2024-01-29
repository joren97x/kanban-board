import {defineStore} from 'pinia'

const list1 = [
    {name: 'tempura', id: 1},
    {name: 'hotdog', id: 2},
    {name: 'basura', id: 3},
    {name: 'pancit', id: 4},
    {name: 'canton', id: 5},
    {name: 'burger', id: 6},
    {name: 'water', id: 7},
    {name: 'sting', id: 8}
]
const list2 = [
    {name: 'kinghenry', id: 1},
    {name: 'hamza', id: 2},
    {name: 'mew', id: 3},
    {name: 'sung', id: 4},
    {name: 'byebye', id: 5},
    {name: 'whatis', id: 6},
    {name: 'ongod', id: 7},
    {name: 'hahaa', id: 8}
]

export const useBoardStore = defineStore('board', {
    state: () => ({
        newBoardDialog: false,
        boards: [
            {
                title: 'To do',
                lists: list1
            },
            {
                title: 'Doing',
                lists: list2
            }
        ]
    }),
    actions: {
        showNewBoardDialog() {
            this.newBoardDialog = !this.newBoardDialog
        }
    },
    // getters: {
    //     myList1(state) {
    //         return state.list1
    //     },
    //     myList2(state) {
    //         return state.list2
    //     }
    // }
})