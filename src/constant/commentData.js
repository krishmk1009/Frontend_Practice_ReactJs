const comments = [
    {
      id: "1",
      text: "First comment",
      replies: [
        {
          id: "2",
          text: "Reply to first comment",
          replies: [
            {
              id: "3",
              text: "Nested reply to first reply",
              replies: [],
            },
            {
              id: "4",
              text: "Another nested reply to first reply",
              replies: [],
            },
          ],
        },
        {
          id: "5",
          text: "Another reply to first comment",
          replies: [],
        },
        {
          id: "6",
          text: "Yet another reply to first comment",
          replies: [
            {
              id: "7",
              text: "Nested reply to third reply",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: "8",
      text: "Second comment",
      replies: [],
    },
    {
      id: "9",
      text: "Third comment",
      replies: [
        {
          id: "10",
          text: "Reply to third comment",
          replies: [],
        },
        {
          id: "11",
          text: "Another reply to third comment",
          replies: [],
        },
        {
          id: "12",
          text: "Yet another reply to third comment",
          replies: [
            {
              id: "13",
              text: "Nested reply to fifth reply",
              replies: [],
            },
            {
              id: "14",
              text: "Another nested reply to fifth reply",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: "15",
      text: "Fourth comment",
      replies: [],
    },
  ];
  
  export default comments;
  