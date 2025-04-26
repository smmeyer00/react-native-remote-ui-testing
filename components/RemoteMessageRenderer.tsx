import { MessageSchema } from "@/lib/remote-ui-schemas";
import React from "react";
import { View, Text, Button, Image, ScrollView, ViewProps } from "react-native";
import { z } from "zod";


// 2. Renderer

const renderComponent = (component: any, key: number | string) => {
  switch (component.type) {
    case "text":
      return (
        <Text
          key={key}
          style={{
            fontSize: component.props.fontSize ?? 14,
            color: component.props.color ?? "#000",
            textAlign: component.props.align ?? "left"
          }}
        >
          {component.props.text}
        </Text>
      );

    case "button":
      return (
        <View key={key} style={{ marginVertical: 8 }}>
          <Button
            title={component.props.label}
            color={component.props.backgroundColor}
            onPress={() => handleAction(component.props.action)}
          />
        </View>
      );

    case "image":
      return (
        <Image
          key={key}
          source={{ uri: component.props.url }}
          style={{
            width: component.props.width ?? "100%",
            height: component.props.height ?? 200,
            resizeMode: component.props.resizeMode ?? "cover"
          }}
        />
      );

    case "spacer":
      return <View key={key} style={{ height: component.props.size }} />;

    case "container":
      return (
        <View
          key={key}
          style={{
            flexDirection: component.props.direction,
            alignItems: mapAlign(component.props.align),
            justifyContent: mapJustify(component.props.justify),
            gap: 8
          } as ViewProps}
        >
          {component.props.children.map((child: any, index: number) =>
            renderComponent(child, `${key}-${index}`)
          )}
        </View>
      );

    case "carousel":
      return (
        <ScrollView
          key={key}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          {component.props.items.map((item: any, index: number) => (
            <View style={{ width: 300, marginRight: 10 }} key={`${key}-${index}`}>
              {renderComponent(item, index)}
            </View>
          ))}
        </ScrollView>
      );

    default:
      console.warn(`Unsupported component: ${component.type}`);
      return null;
  }
};

const handleAction = (action: any) => {
  switch (action.type) {
    case "navigate":
      console.log("Navigate to:", action.payload);
      break;
    case "dismiss":
      console.log("Dismiss message");
      break;
    case "custom":
      console.log("Custom action:", action.payload);
      break;
    default:
      console.warn("Unknown action type", action);
  }
};

const mapAlign = (align: string | undefined) => {
  switch (align) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return align;
  }
};

const mapJustify = (justify: string | undefined) => {
  switch (justify) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return justify;
  }
};

// 3. Main Renderer Component

type RemoteMessageRendererProps = {
  messageData: unknown; // raw JSON
};

export const RemoteMessageRenderer = ({ messageData }: RemoteMessageRendererProps) => {
  const parsed = MessageSchema.safeParse(messageData);

  if (!parsed.success) {
    console.error("Invalid message:", parsed.error.format());
    return <Text>Error: invalid message format.</Text>;
  }

  const message = parsed.data;

  return (
    <View style={{ padding: 16 }}>
      {message.components?.map((component: any, index: string | number) =>
        renderComponent(component, index)
      )}
    </View>
  );
};
