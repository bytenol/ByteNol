// import FullstackPythonIllustration from "./illustrations/FullstackPythonIllustration";
// import FrontendIllustration from "./illustrations/FrontendIllustration";
// import BackendPythonIllustration from "./illustrations/BackendPythonIllustration";
// import AndroidIllustration from "./illustrations/AndroidIllustration";
// import AutomationIllustration from "./illustrations/AutomationIllustration";

import type { CourseIllustration as IllustrationType } from "../courseData";
import FullstackPythonIllustration from "./illustrations/FullstackPythonIllustration";

interface CourseIllustrationProps {
  type: IllustrationType;
}

function CourseIllustration({ type }: CourseIllustrationProps) {
  switch (type) {
    case "fullstack-python":
      return <FullstackPythonIllustration />;

    // case "frontend":
    //   return <FrontendIllustration />;

    // case "backend-python":
    //   return <BackendPythonIllustration />;

    // case "android":
    //   return <AndroidIllustration />;

    // case "automation":
    //   return <AutomationIllustration />;

    default:
      return null;
  }
}

export default CourseIllustration;