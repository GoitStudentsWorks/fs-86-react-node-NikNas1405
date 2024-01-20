import styled from 'styled-components';
import { globalColor } from '../../../styles/root';

const Container = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`;
const BlockList = styled.ul`
  margin-bottom: 20px;

  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 13px;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }
`;
const ItemBlock = styled.li`
  display: block;
  width: 157px;

  padding: 14px;
  background-color: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px solid #efede833;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
    height: 96px;
    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }
`;
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`;
const Svg = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${globalColor.colorOrange1};
`;
const Title = styled.h2`
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 18px;
  }
`;
const Value = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const TextBlock = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`;
const SvgText = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${globalColor.colorBeige};
  border-radius: 50%;
`;
const ExclamationSvg = styled.svg`
  width: 24px;
  height: 24px;
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${globalColor.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export {
  ExclamationSvg,
  Text,
  SvgText,
  TextBlock,
  Container,
  Value,
  BlockList,
  ItemBlock,
  TitleBlock,
  Title,
  Svg,
};
