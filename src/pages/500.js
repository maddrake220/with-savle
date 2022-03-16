import ErrorBack from "@/components/common/ErrorBack";
import ErrorContainer from "@/components/common/ErrorContainer";
import ErrorContent from "@/components/common/ErrorContent";
import ErrorImage from "@/components/common/ErrorImage";
import ErrorSubTitle from "@/components/common/ErrorSubTitle";
import ErrorTitle from "@/components/common/ErrorTitle";

function ServerError() {
  return (
    <ErrorContainer>
      <ErrorTitle>500 Error</ErrorTitle>
      <ErrorSubTitle type="server_error">Internal Server Error</ErrorSubTitle>
      <ErrorContent>
        죄송합니다.
        <br />
        요청하신 페이지를 찾을 수 없습니다.
      </ErrorContent>
      <ErrorBack />
      <ErrorImage type="serverErrorImg" />
    </ErrorContainer>
  );
}

export default ServerError;
