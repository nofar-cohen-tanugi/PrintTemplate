import { ITemplate } from '../../model/Template/ITemplate.model';

export const Template = (props: ITemplate) => {
  const { content, background, textColor } = props;
  return (
    <div style={{ backgroundImage: `url(${background})`, color: textColor }}>
      {content}
    </div>
  );
};
