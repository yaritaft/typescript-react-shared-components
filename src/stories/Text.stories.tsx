import React from "react";

import Text from "../components/Text";

export default {
  component: Text,
  title: "Components/Text",
};

export const Primary: React.VFC<{}> = () => <Text num={4} />;
