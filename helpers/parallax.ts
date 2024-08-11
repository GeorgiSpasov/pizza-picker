import {SliceSide} from "@/types/global";
import {interpolate} from "react-native-reanimated";
import type {IComputedDirectionTypes} from "react-native-reanimated-carousel";

interface TBaseConfig {
  size: number
  vertical: boolean
}

export interface ILayoutConfig {
  /**
     * control prev/next item offset.
     * @default 100
     */
  parallaxScrollingOffset?: number
  /**
     * control prev/current/next item offset.
     * @default 0.8
     */
  parallaxScrollingScale?: number
  /**
     * control prev/next item offset.
     * @default Math.pow(parallaxScrollingScale, 2)
     */
  parallaxAdjacentItemScale?: number
}

export type TParallaxModeProps = IComputedDirectionTypes<{
  /**
     * Carousel Animated transitions.
     */
  mode?: "parallax"
  modeConfig?: ILayoutConfig
}>;

export function parallaxLayout(
  baseConfig: TBaseConfig,
  modeConfig: ILayoutConfig = {},
  side: SliceSide
) {
  const {size, vertical} = baseConfig;
  const {
    parallaxScrollingOffset = 100,
    parallaxScrollingScale = 0.8,
    parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
  } = modeConfig;

  return (value: number) => {
    "worklet";
    const translate = interpolate(
      value,
      [-1, 0, 1],
      [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset],
    );

    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [0, size, 0],
      'clamp',
    );

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxAdjacentItemScale,
        parallaxScrollingScale,
        parallaxAdjacentItemScale,
      ],
      'clamp',
    );

    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxScrollingOffset * (side === "left" ? 1 : -1),
        0,
        parallaxScrollingOffset * (side === "left" ? 1 : -1)
      ],
    );

    return {
      transform: [
        {
          translateY: vertical ? translate : 0,
        },
        {
          translateX: vertical ? translateX : translate,
        },
        {
          scale,
        },
      ],
      zIndex,
    };
  };
}