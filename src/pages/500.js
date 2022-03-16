import {
  Back,
  Container,
  Content,
  ImageBox,
  SubTitle,
  Title,
} from "@/components/common/error";
import Seo from "@/components/common/Seo";

function ServerError() {
  return (
    <Container>
      <Seo
        title="세이블 | 쉽고 FUN한 저축"
        desc="목적을 여는 FUN한 방법, 가만히 있어도 저축되는 펀세이빙을 통해 목적을 이루어보세요!"
        ogTitle="SAVLE(세이블)"
        ogUrl="https://with-savle.herokuapp.com/"
        ogDesc="목적을 여는 FUN한 방법, 가만히 있어도 저축되는 펀세이빙을 통해 목적을 이루어보세요!"
      />
      <Title>500 Error</Title>
      <SubTitle type="server_error">Internal Server Error</SubTitle>
      <Content>
        죄송합니다.
        <br />
        요청하신 페이지를 찾을 수 없습니다.
      </Content>
      <Back />
      <ImageBox type="serverErrorImg" />
    </Container>
  );
}

export default ServerError;
