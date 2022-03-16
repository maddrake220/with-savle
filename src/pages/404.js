import ErrorBack from "@/components/common/ErrorBack";
import ErrorContainer from "@/components/common/ErrorContainer";
import ErrorContent from "@/components/common/ErrorContent";
import ErrorImage from "@/components/common/ErrorImage";
import ErrorSubTitle from "@/components/common/ErrorSubTitle";
import ErrorTitle from "@/components/common/ErrorTitle";

function NotFound() {
  return (
    <ErrorContainer>
      <ErrorTitle>404 Error</ErrorTitle>
      <ErrorSubTitle type="not_found">Not Found</ErrorSubTitle>
      <ErrorContent>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주세요.
      </ErrorContent>
      <ErrorBack />
      <ErrorImage type="notFoundImg" />
    </ErrorContainer>
  );
}

export default NotFound;
