import styled from "styled-components";
import { ReactComponent as DangerIcon } from '../../../../images/danger-icon.svg'

export const StyledDangerIcon = styled(DangerIcon)`
  margin-top: 88px;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledDisclaimer = styled.strong`
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 2px;
  margin-top: 16px;
  display: block;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledDescription = styled.p`
  line-height: 28px;
  font-size: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.color.black};
`;