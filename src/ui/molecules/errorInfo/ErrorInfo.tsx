import './ErrorInfo.scss'

export const ErrorInfo = ({ errorText }:IProps) => (
    <div className="ErrorInfo">
        <p>Error: <span className="ErrorInfo_Text">{errorText}</span>.</p>
    </div>
)

export interface IProps {
    errorText: string
}