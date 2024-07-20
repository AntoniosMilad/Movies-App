
export const useRTL = (): {
  isRTL: boolean;
  flexDirection: object;
  flexDirectionInverted: object;
  textAlign: object;
  alignSelf: object;
  alignSelfInverted: object;
  rotateY: object;
  alignItems: object;
  alignItemsInverted: object;
  textAlignInverted: object;
} => {
  //add ur lang boolean here
  const { isRTL } = true;

  return {
    isRTL,
    flexDirection: { flexDirection: isRTL ? 'row-reverse' : 'row' },
    flexDirectionInverted: { flexDirection: isRTL ? 'row' : 'row-reverse' },
    textAlign: { textAlign: isRTL ? 'right' : 'left' },
    alignSelf: { alignSelf: isRTL ? 'flex-end' : 'flex-start' },
    alignSelfInverted: { alignSelf: isRTL ? 'flex-start' : 'flex-end' },
    rotateY: { transform: [{ rotateY: isRTL ? '0deg' : '180deg' }] },
    alignItems: { alignItems: isRTL ? 'flex-end' : 'flex-start' },
    alignItemsInverted: { alignItems: isRTL ? 'flex-start' : 'flex-end' },
    textAlignInverted: { textAlign: isRTL ? 'left' : 'right' },
  };
};
