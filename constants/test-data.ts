import { MessageSchema } from "../lib/remote-ui-schemas";

export const m1 = {
  id: "msg-1",
  version: "1.0",
  components: [
    {
      type: "text",
      props: {
        text: "Welcome to our app!",
        fontSize: 18,
        color: "#333",
        align: "center",
      },
    },
    {
      type: "spacer",
      props: {
        size: 20,
      },
    },
    {
      type: "button",
      props: {
        label: "Get Started",
        action: {
          type: "navigate",
          payload: "onboarding",
        },
        backgroundColor: "#0066ff",
        textColor: "#ffffff",
      },
    },
  ],
};

export const m2 = {
  id: "msg-2",
  version: "1.0",
  components: [
    {
      type: "image",
      props: {
        url: "https://via.placeholder.com/300x150",
        width: 300,
        height: 150,
        resizeMode: "cover",
      },
    },
    {
      type: "spacer",
      props: {
        size: 12,
      },
    },
    {
      type: "text",
      props: {
        text: "Enjoy exclusive offers!",
        fontSize: 16,
        color: "#000",
        align: "center",
      },
    },
  ],
};

export const m3 = {
  id: "msg-3",
  version: "1.0",
  components: [
    {
      type: "container",
      props: {
        flex: 1,
        direction: "column",
        justify: "center",
        align: "center",
        children: [
          {
            type: "button",
            props: {
              label: "Accept",
              action: {
                type: "custom",
                payload: "accepted",
              },
              backgroundColor: "#28a745",
            },
          },
          {
            type: "spacer",
            props: {
              size: 8,
            },
          },
          {
            type: "button",
            props: {
              label: "Decline",
              action: {
                type: "custom",
                payload: "declined",
              },
              backgroundColor: "#dc3545",
            },
          },
        ],
      },
    },
  ],
};

export const m4 = {
  id: "msg-4",
  version: "1.0",
  components: [
    {
      type: "container",
      props: {
        flex: 1,
        direction: "column",
        justify: "center",
        align: "center",
        children: [
          {
            type: "carousel",
            props: {
              items: [
                {
                  type: "container",
                  props: {
                    direction: "column",
                    children: [
                      {
                        type: "image",
                        props: {
                          url: "https://via.placeholder.com/300x150",
                          width: 300,
                          height: 150,
                        },
                      },
                      {
                        type: "text",
                        props: {
                          text: "Slide 1: Hot Deal!",
                          fontSize: 14,
                          align: "center",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "container",
                  props: {
                    direction: "column",
                    children: [
                      {
                        type: "image",
                        props: {
                          url: "https://via.placeholder.com/300x150?text=Slide+2",
                          width: 300,
                          height: 150,
                        },
                      },
                      {
                        type: "text",
                        props: {
                          text: "Slide 2: New Arrivals!",
                          fontSize: 14,
                          align: "center",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
