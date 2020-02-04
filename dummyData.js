const dummyData = () => {
  const pictureData = {
    total: '7527',
    total_pages: '7527',
    results: [
      {
        id: 'U6nlG0Y5sfs',
        created_at: '2018-06-20T01:22:40-04:00',
        updated_at: '2020-01-28T00:02:17-05:00',
        promoted_at: '2018-06-21T11:39:13-04:00',
        width: 2303,
        height: 3594,
        color: '#060205',
        description: 'Pink Wall Full of Dogs',
        alt_description: 'litter of dogs fall in line beside wall',
        urls: {
          raw: 'https://images.unsplash.com/photo-1578086591939-f3e05b7dbfdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2MH0',
          full: 'https://images.unsplash.com/photo-1578086591939-f3e05b7dbfdd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjExMzk2MH0',
          regular: 'https://images.unsplash.com/photo-1578086591939-f3e05b7dbfdd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExMzk2MH0',
          small: 'https://images.unsplash.com/photo-1578086591939-f3e05b7dbfdd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjExMzk2MH0',
          thumb: 'https://images.unsplash.com/photo-1578086591939-f3e05b7dbfdd?ixlib=rb-1.2.1&q',
        },
      },
    ],
  };


  const today = {
    message: 'accurate',
    cod: '200',
    count: 1,
    list: [
      {
        id: 2643743,
        name: 'London',
        coord: {
          lat: 51.5085,
          lon: -0.1258,
        },
        main: {
          temp: 7,
          pressure: 1012,
          humidity: 81,
          temp_min: 5,
          temp_max: 8,
        },
        dt: 1485791400,
        wind: {
          speed: 4.6,
          deg: 90,
        },
        sys: {
          country: 'GB',
        },
        rain: null,
        snow: null,
        clouds: {
          all: 90,
        },
        weather: [
          {
            id: 701,
            main: 'Mist',
            description: 'mist',
            icon: '50d',
          },
          {
            id: 300,
            main: 'Drizzle',
            description: 'light intensity drizzle',
            icon: '09d',
          },
        ],
      },
    ],
  };
  const forecast = {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1580666400,
        main: {
          temp: 276.54,
          feels_like: 268.11,
          temp_min: 276.54,
          temp_max: 276.54,
          pressure: 996,
          sea_level: 996,
          grnd_level: 978,
          humidity: 71,
          temp_kf: 0,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13n',
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 8.93,
          deg: 285,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-02 18:00:00',
      },
      {
        dt: 1580677200,
        main: {
          temp: 274.99,
          feels_like: 267.7,
          temp_min: 274.99,
          temp_max: 274.99,
          pressure: 997,
          sea_level: 997,
          grnd_level: 978,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01n',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 7.43,
          deg: 270,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-02 21:00:00',
      },
      {
        dt: 1580688000,
        main: {
          temp: 275.72,
          feels_like: 268.17,
          temp_min: 275.72,
          temp_max: 275.72,
          pressure: 997,
          sea_level: 997,
          grnd_level: 979,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 42,
        },
        wind: {
          speed: 7.67,
          deg: 276,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-03 00:00:00',
      },
      {
        dt: 1580698800,
        main: {
          temp: 275.46,
          feels_like: 268.35,
          temp_min: 275.46,
          temp_max: 275.46,
          pressure: 996,
          sea_level: 996,
          grnd_level: 978,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.89,
          deg: 275,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-03 03:00:00',
      },
      {
        dt: 1580709600,
        main: {
          temp: 274.54,
          feels_like: 267.22,
          temp_min: 274.54,
          temp_max: 274.54,
          pressure: 996,
          sea_level: 996,
          grnd_level: 978,
          humidity: 79,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 7.26,
          deg: 281,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-03 06:00:00',
      },
      {
        dt: 1580720400,
        main: {
          temp: 275.33,
          feels_like: 267.9,
          temp_min: 275.33,
          temp_max: 275.33,
          pressure: 997,
          sea_level: 997,
          grnd_level: 979,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 7.49,
          deg: 287,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-03 09:00:00',
      },
      {
        dt: 1580731200,
        main: {
          temp: 275.94,
          feels_like: 268.16,
          temp_min: 275.94,
          temp_max: 275.94,
          pressure: 998,
          sea_level: 998,
          grnd_level: 980,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 76,
        },
        wind: {
          speed: 7.97,
          deg: 294,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-03 12:00:00',
      },
      {
        dt: 1580742000,
        main: {
          temp: 275.55,
          feels_like: 268.98,
          temp_min: 275.55,
          temp_max: 275.55,
          pressure: 999,
          sea_level: 999,
          grnd_level: 981,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.27,
          deg: 296,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-03 15:00:00',
      },
      {
        dt: 1580752800,
        main: {
          temp: 274.85,
          feels_like: 268.77,
          temp_min: 274.85,
          temp_max: 274.85,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 982,
          humidity: 77,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 93,
        },
        wind: {
          speed: 5.48,
          deg: 297,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-03 18:00:00',
      },
      {
        dt: 1580763600,
        main: {
          temp: 274.49,
          feels_like: 269.01,
          temp_min: 274.49,
          temp_max: 274.49,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 983,
          humidity: 79,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.62,
          deg: 283,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-03 21:00:00',
      },
      {
        dt: 1580774400,
        main: {
          temp: 272.74,
          feels_like: 268.11,
          temp_min: 272.74,
          temp_max: 272.74,
          pressure: 1001,
          sea_level: 1001,
          grnd_level: 982,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 3.5,
          deg: 267,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-04 00:00:00',
      },
      {
        dt: 1580785200,
        main: {
          temp: 272.87,
          feels_like: 268.82,
          temp_min: 272.87,
          temp_max: 272.87,
          pressure: 999,
          sea_level: 999,
          grnd_level: 980,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 2.66,
          deg: 268,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-04 03:00:00',
      },
      {
        dt: 1580796000,
        main: {
          temp: 272.86,
          feels_like: 269.76,
          temp_min: 272.86,
          temp_max: 272.86,
          pressure: 998,
          sea_level: 998,
          grnd_level: 980,
          humidity: 93,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 1.33,
          deg: 192,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-04 06:00:00',
      },
      {
        dt: 1580806800,
        main: {
          temp: 273.96,
          feels_like: 271.08,
          temp_min: 273.96,
          temp_max: 273.96,
          pressure: 997,
          sea_level: 997,
          grnd_level: 979,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 1,
          deg: 154,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-04 09:00:00',
      },
      {
        dt: 1580817600,
        main: {
          temp: 274.57,
          feels_like: 270.87,
          temp_min: 274.57,
          temp_max: 274.57,
          pressure: 998,
          sea_level: 998,
          grnd_level: 980,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.19,
          deg: 33,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-04 12:00:00',
      },
      {
        dt: 1580828400,
        main: {
          temp: 273.42,
          feels_like: 268.24,
          temp_min: 273.42,
          temp_max: 273.42,
          pressure: 999,
          sea_level: 999,
          grnd_level: 981,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.97,
          deg: 28,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-04 15:00:00',
      },
      {
        dt: 1580839200,
        main: {
          temp: 271.83,
          feels_like: 265.96,
          temp_min: 271.83,
          temp_max: 271.83,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 985,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 96,
        },
        wind: {
          speed: 4.47,
          deg: 20,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-04 18:00:00',
      },
      {
        dt: 1580850000,
        main: {
          temp: 270.05,
          feels_like: 263.84,
          temp_min: 270.05,
          temp_max: 270.05,
          pressure: 1006,
          sea_level: 1006,
          grnd_level: 987,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 66,
        },
        wind: {
          speed: 4.56,
          deg: 12,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-04 21:00:00',
      },
      {
        dt: 1580860800,
        main: {
          temp: 269.93,
          feels_like: 263.66,
          temp_min: 269.93,
          temp_max: 269.93,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 989,
          humidity: 56,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 4.51,
          deg: 4,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-05 00:00:00',
      },
      {
        dt: 1580871600,
        main: {
          temp: 269.66,
          feels_like: 262.9,
          temp_min: 269.66,
          temp_max: 269.66,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 991,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.1,
          deg: 354,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-05 03:00:00',
      },
      {
        dt: 1580882400,
        main: {
          temp: 268.93,
          feels_like: 262.14,
          temp_min: 268.93,
          temp_max: 268.93,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 995,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 93,
        },
        wind: {
          speed: 5.06,
          deg: 354,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-05 06:00:00',
      },
      {
        dt: 1580893200,
        main: {
          temp: 270.24,
          feels_like: 263.24,
          temp_min: 270.24,
          temp_max: 270.24,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 997,
          humidity: 42,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 5.26,
          deg: 348,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-05 09:00:00',
      },
      {
        dt: 1580904000,
        main: {
          temp: 272.04,
          feels_like: 264.85,
          temp_min: 272.04,
          temp_max: 272.04,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 999,
          humidity: 39,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 35,
        },
        wind: {
          speed: 5.59,
          deg: 335,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-05 12:00:00',
      },
      {
        dt: 1580914800,
        main: {
          temp: 270.96,
          feels_like: 265.31,
          temp_min: 270.96,
          temp_max: 270.96,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 999,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 3.78,
          deg: 309,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-05 15:00:00',
      },
      {
        dt: 1580925600,
        main: {
          temp: 271.01,
          feels_like: 265.08,
          temp_min: 271.01,
          temp_max: 271.01,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1000,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 33,
        },
        wind: {
          speed: 4.82,
          deg: 289,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-05 18:00:00',
      },
      {
        dt: 1580936400,
        main: {
          temp: 271.53,
          feels_like: 264.76,
          temp_min: 271.53,
          temp_max: 271.53,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1000,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 59,
        },
        wind: {
          speed: 5.9,
          deg: 317,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-05 21:00:00',
      },
      {
        dt: 1580947200,
        main: {
          temp: 270.79,
          feels_like: 265.28,
          temp_min: 270.79,
          temp_max: 270.79,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1001,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 29,
        },
        wind: {
          speed: 4.05,
          deg: 305,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-06 00:00:00',
      },
      {
        dt: 1580958000,
        main: {
          temp: 270.53,
          feels_like: 265,
          temp_min: 270.53,
          temp_max: 270.53,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1000,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n',
          },
        ],
        clouds: {
          all: 28,
        },
        wind: {
          speed: 4.08,
          deg: 269,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-06 03:00:00',
      },
      {
        dt: 1580968800,
        main: {
          temp: 271.16,
          feels_like: 264.59,
          temp_min: 271.16,
          temp_max: 271.16,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 999,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 25,
        },
        wind: {
          speed: 5.78,
          deg: 259,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-06 06:00:00',
      },
      {
        dt: 1580979600,
        main: {
          temp: 273.48,
          feels_like: 265.9,
          temp_min: 273.48,
          temp_max: 273.48,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 997,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 7.35,
          deg: 274,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-06 09:00:00',
      },
      {
        dt: 1580990400,
        main: {
          temp: 273.82,
          feels_like: 265.84,
          temp_min: 273.82,
          temp_max: 273.82,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 995,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 97,
        },
        wind: {
          speed: 8.23,
          deg: 267,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-06 12:00:00',
      },
      {
        dt: 1581001200,
        main: {
          temp: 274.86,
          feels_like: 267.09,
          temp_min: 274.86,
          temp_max: 274.86,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 993,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04d',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 8.16,
          deg: 279,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-06 15:00:00',
      },
      {
        dt: 1581012000,
        main: {
          temp: 274.9,
          feels_like: 266.77,
          temp_min: 274.9,
          temp_max: 274.9,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 993,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 8.8,
          deg: 293,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-06 18:00:00',
      },
      {
        dt: 1581022800,
        main: {
          temp: 274.82,
          feels_like: 267.64,
          temp_min: 274.82,
          temp_max: 274.82,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 993,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 7.66,
          deg: 309,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-06 21:00:00',
      },
      {
        dt: 1581033600,
        main: {
          temp: 274.21,
          feels_like: 267.59,
          temp_min: 274.21,
          temp_max: 274.21,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 995,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'overcast clouds',
            icon: '04n',
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.54,
          deg: 337,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-07 00:00:00',
      },
      {
        dt: 1581044400,
        main: {
          temp: 269.97,
          feels_like: 263.64,
          temp_min: 269.97,
          temp_max: 269.97,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 997,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'few clouds',
            icon: '02n',
          },
        ],
        clouds: {
          all: 11,
        },
        wind: {
          speed: 5.06,
          deg: 349,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2020-02-07 03:00:00',
      },
      {
        dt: 1581055200,
        main: {
          temp: 269.12,
          feels_like: 262.94,
          temp_min: 269.12,
          temp_max: 269.12,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1000,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        clouds: {
          all: 28,
        },
        wind: {
          speed: 4.33,
          deg: 358,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-07 06:00:00',
      },
      {
        dt: 1581066000,
        main: {
          temp: 271.09,
          feels_like: 263.85,
          temp_min: 271.09,
          temp_max: 271.09,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1003,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.65,
          deg: 355,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-07 09:00:00',
      },
      {
        dt: 1581076800,
        main: {
          temp: 272.12,
          feels_like: 264.74,
          temp_min: 272.12,
          temp_max: 272.12,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1004,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.93,
          deg: 356,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-07 12:00:00',
      },
      {
        dt: 1581087600,
        main: {
          temp: 270.53,
          feels_like: 265.3,
          temp_min: 270.53,
          temp_max: 270.53,
          pressure: 1024,
          sea_level: 1024,
          grnd_level: 1005,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.97,
          deg: 353,
        },
        sys: {
          pod: 'd',
        },
        dt_txt: '2020-02-07 15:00:00',
      },
    ],
    city: {
      id: 599614,
      name: 'Eisiskes',
      coord: {
        lat: 54.1667,
        lon: 25,
      },
      country: 'LT',
      population: 3809,
      timezone: 7200,
      sunrise: 1580623630,
      sunset: 1580655599,
    },
  };
  return {
    today,
    forecast,
    pictureData,
  };
};


export default dummyData();
