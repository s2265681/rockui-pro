import React, { useRef, useEffect } from "react";

interface Props {
  type?: string;
  content: any[];
  isEdit?: boolean;
  onChange?: (value?: Node, type?: string) => void;
}

const Index: React.FC<Props> = (props) => {
  const domRef = useRef<HTMLDivElement>(null);
  const { type, content, isEdit, onChange } = props;
  const handleChange = (e: React.FormEvent<HTMLDivElement>, type?: string) => {
    if (domRef && domRef.current) {
      let value = domRef.current;
      onChange && onChange(value, type);
    }
  };
  return (
    <div onBlur={(e) => handleChange(e, type)} className="content-info-wrapper">
      {type === "label-bar" && (
        <div
          className="label_wrapper"
          ref={domRef}
          style={{ minHeight: 100 }}
          contentEditable={isEdit}
        >
          {content[0]}
        </div>
      )}

      {type === "one-column" && (
        <div
          className="one-wrapper"
          ref={domRef}
          style={{ minHeight: 300 }}
          contentEditable={isEdit}
        >
          {content[0]}
        </div>
      )}

      {type === "two-column" && (
        <div className="two_wrapper" style={{ minHeight: 300 }} ref={domRef}>
          <div className="left_wrapper" contentEditable={isEdit}>
            {content[0]}
          </div>
          <div className="right_wrapper" contentEditable={isEdit}>
            {content[1]}
          </div>
        </div>
      )}
    </div>
  );
};

Index.defaultProps = {
  content: ["请输入内容","请输入内容"],
  isEdit: true,
};

export default Index;
