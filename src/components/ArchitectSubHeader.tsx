import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '~/vue-component';

interface Props {
  subtitle: string;
}

@Component
export default class ArchitectSubHeader extends VueComponent<Props> {
    @Prop({ required: true })
    subtitle!: string;

    render() {
        return <h1>{this.subtitle}</h1>
    }
}