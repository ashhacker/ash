import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { ContactSummary, IContactSummaryProps } from "./ContactSummary";
import * as React from "react";
import * as ReactDOM from "react-dom";

export class summarizeContact
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private container: HTMLDivElement;
  private props: IContactSummaryProps;

  constructor() {
    // Empty
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    this.container = document.createElement("div");

    this.props = {
      contact: {
        id: context.parameters.contactId?.raw ?? "",
        name: context.parameters.contactName?.raw ?? "",
        email: context.parameters.contactEmail?.raw ?? "",
        phone: context.parameters.contactPhone?.raw ?? "",
      },
    };
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    // Update props based on context
    this.props.contact.id = context.parameters.contactId?.raw ?? "";
    this.props.contact.name = context.parameters.contactName?.raw ?? "";
    this.props.contact.email = context.parameters.contactEmail?.raw ?? "";
    this.props.contact.phone = context.parameters.contactPhone?.raw ?? "";

    // Return the React element
    return React.createElement(ContactSummary, this.props);
  }

  public getOutputs(): IOutputs {
    return {
      contactName: this.props.contact.name,
      contactEmail: this.props.contact.email,
    };
  }

  public destroy(): void {
    ReactDOM.unmountComponentAtNode(this.container);
  }
}
