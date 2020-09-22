const initialState = {
    view: 'home',
    elevation: 2,
    logged: false,
    weeks: [
        {
            startDate: new Date('10-05-2020'),
            endDate: new Date('10-09-2020'),
            weekNo: 1,
            current: false,
        },
        {
            startDate: new Date('10-12-2020'),
            endDate: new Date('10-16-2020'),
            weekNo: 2,
            current: false,
        },
        {
            startDate: new Date('10-19-2020'),
            endDate: new Date('10-23-2020'),
            weekNo: 3,
            current: false,
        },
        {
            startDate: new Date('10-26-2020'),
            endDate: new Date('10-30-2020'),
            weekNo: 4,
            current: false,
        },
        {
            startDate: new Date('11-02-2020'),
            endDate: new Date('11-06-2020'),
            weekNo: 5,
            current: false,
        },
        {
            startDate: new Date('11-09-2020'),
            endDate: new Date('11-13-2020'),
            weekNo: 6,
            current: false,
        },
    ],
    live: [
        {
            day: 7,
            month: 10,
            course: 'Baschet'
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_VIEW": 
            return { ...state,
                view: action.view
            }
        case "STORE_ELEVATION":
            return { ...state,
               elevation: action.elevation,
            }
        case "STORE_LOGGED":
            return { ...state,
                logged: action.logged,
            }
        case "STORE_LIVE":
            return { ...state,
                live: [...state.live,
                action.live
            ],
            }
        case "STOP_LIVE":
            let filteredLive = [...state.live].filter(item => (item.course != action.live.course))
            return { ...state,
                live: [...filteredLive
            ],
            }
        default: 
            return state;
    }
}