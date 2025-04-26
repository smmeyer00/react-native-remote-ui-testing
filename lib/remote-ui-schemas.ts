import { z } from "zod";

const baseComponent = z.object({
  id: z.string().optional(), // useful for tracking/interactions
  type: z.string(),
  fallback: z.any().optional() // fallback schema if unsupported
});

// Supported components

const TextComponent = baseComponent.extend({
  type: z.literal("text"),
  props: z.object({
    text: z.string(),
    fontSize: z.number().optional(),
    color: z.string().optional(),
    align: z.enum(["left", "center", "right"]).optional()
  })
});

const ButtonComponent = baseComponent.extend({
  type: z.literal("button"),
  props: z.object({
    label: z.string(),
    action: z.object({
      type: z.enum(["navigate", "dismiss", "custom"]),
      payload: z.any().optional()
    }),
    backgroundColor: z.string().optional(),
    textColor: z.string().optional()
  })
});

const ImageComponent = baseComponent.extend({
  type: z.literal("image"),
  props: z.object({
    url: z.string(),
    width: z.number().optional(),
    height: z.number().optional(),
    resizeMode: z.enum(["cover", "contain", "stretch"]).optional()
  })
});

const SpacerComponent = baseComponent.extend({
  type: z.literal("spacer"),
  props: z.object({
    size: z.number()
  })
});

const ContainerComponent = baseComponent.extend({
  type: z.literal("container"),
  props: z.object({
    direction: z.enum(["row", "column"]),
    align: z.enum(["start", "center", "end", "stretch"]).optional(),
    justify: z.enum(["start", "center", "end", "space-between"]).optional(),
    children: z.lazy(() => ComponentArray)
  })
});

const CarouselComponent = baseComponent.extend({
  type: z.literal("carousel"),
  props: z.object({
    items: z.lazy(() => ComponentArray) // usually containers
  })
});

const ComponentSchema: z.ZodType = z.discriminatedUnion("type", [
  TextComponent,
  ButtonComponent,
  ImageComponent,
  SpacerComponent,
  ContainerComponent,
  CarouselComponent
]);

const ComponentArray = z.array(ComponentSchema);

export const MessageSchema = z.object({
  id: z.string(),
  version: z.string(),
  components: ComponentArray
});
