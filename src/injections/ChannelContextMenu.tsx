import { PluginInjectorUtils } from "../index";
import ContextMenuEntry from "../Components/MenuItem";
import Types from "../types";
export default (): void => {
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.ChannelContext,
    ContextMenuEntry,
    6,
  );
};
