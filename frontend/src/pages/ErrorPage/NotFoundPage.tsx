import ErrorLayout from "./components/ErrorLayout";
import NotFoundIllustration from "./components/NotFoundIllustration";

function NotFoundPage() {
  return (
    <ErrorLayout
      code="404"
      title="Looks like this page got lost."
      description="The page you're looking for doesn't exist, may have moved, or the URL might be incorrect."
      illustration={<NotFoundIllustration />}
    />
  );
}

export default NotFoundPage;