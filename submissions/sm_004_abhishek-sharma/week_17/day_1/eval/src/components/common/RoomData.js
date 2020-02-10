const ROOM_DATA = [
    {
      id: 1,
      title: '1 Floor',
      routeName: '1floor',
      items: [
        {
          id: 1,
          name: 'Brown Brim',
          imageUrl: 'https://images.unsplash.com/photo-1576073460027-794a4ab09b12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          floor: 1,
          capacity: 4,
          price: 1000
        },
        {
          id: 2,
          name: 'Blue Beanie',
          imageUrl: 'https://images.unsplash.com/photo-1576073459656-9b03ee75cc92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
          floor: 1,
          capacity: 5,
          price: 1200
        },
        {
          id: 3,
          name: 'Brown Cowboy',
          imageUrl: 'https://images.unsplash.com/photo-1572025442811-aa5146a780fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=626&q=80',
          floor: 1,
          capacity: 4,
          price: 1500
        },
        {
          id: 4,
          name: 'Grey Brim',
          imageUrl: 'https://images.unsplash.com/photo-1572025442348-511bdcae389b?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          floor: 1,
          capacity: 4,
          price: 800
        }
      ]
    },
    {
        id: 2,
        title: '2 Floor',
        routeName: '2floor',
        items: [
          {
            id: 5,
            name: 'Green Beanie',
            imageUrl: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            floor: 2,
            capacity: 15,
            price: 5000
          },
          {
            id: 6,
            name: 'Wolf Cap',
            imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
            floor: 2,
            capacity: 8,
            price: 2000
          },
          {
            id: 7,
            name: 'Blue Snapback',
            imageUrl: 'https://images.unsplash.com/photo-1505409859467-3a796fd5798e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            floor: 2,
            capacity: 6,
            price: 1250
          },
          {
            id: 8,
            name: 'Timberlands',
            imageUrl: 'https://images.unsplash.com/photo-1562664348-1ee6c6c0ce92?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            floor: 2,
            capacity: 4,
            price: 700
          }
        ]
      },
      {
        id: 3,
        title: '3 Floor',
        routeName: '3floor',
        items: [
          {
            id: 9,
            name: 'Tan Trench',
            imageUrl: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
            floor: 3,
            capacity: 8,
            price: 2500
          },
          {
            id: 10,
            name: 'Black Converse',
            imageUrl: 'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            floor: 3,
            capacity: 10,
            price: 4000
          },
          {
            id: 11,
            name: 'Samurai',
            imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            floor: 3,
            capacity: 5,
            price: 500
          },
          {
            id: 12,
            name: 'Vikings',
            imageUrl: 'https://images.unsplash.com/photo-1570126646281-5ec88111777f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=725&q=80',
            floor: 3,
            capacity: 15,
            price: 8000
          }
        ]
      },
      {
        id: 4,
        title: '4 Floor',
        routeName: '4floor',
        items: [
          {
            id: 13,
            name: 'Kids Room',
            imageUrl: 'https://images.unsplash.com/photo-1560264401-b76ed96f3134?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            floor: 4,
            capacity: 10,
            price: 2500
          },
          {
            id: 14,
            name: 'Shinjas',
            imageUrl: 'https://images.unsplash.com/photo-1570126688035-1e6adbd61053?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=323&q=80',
            floor: 4,
            capacity: 4,
            price: 400
          },
          {
            id: 15,
            name: 'Google',
            imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            floor: 4,
            capacity: 4,
            price: 1500
          },
          {
            id: 16,
            name: 'Grey Brim',
            imageUrl: 'https://images.unsplash.com/photo-1572025442348-511bdcae389b?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            floor: 4,
            capacity: 150,
            price: 100000
          }
        ]
      },
    
  ];
  
  export default ROOM_DATA;