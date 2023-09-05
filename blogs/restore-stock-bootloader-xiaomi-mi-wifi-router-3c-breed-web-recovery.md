![Thumbnail](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/7b2f8f6b-0913-4507-89dd-819941243b40)

# Restore the stock bootloader on the Xiaomi Mi WiFi Router 3C from Breed Web recovery

I flashed breed web bootloader for installing Openwrt firmware. After changing the bootloader to breed web I didn't find any articles, blogs, forum post talking about how to return stock bootloader. Here I find a way to back to the stock bootloader on the Mi WiFi Router 3c.
All files only for Xiaomi Mi WiFi Router 3C (R3C). And this router openwrt page https://openwrt.org/toh/xiaomi/mir3c . So don't on other router.

## Required files
- [FullDupm3cR3L.zip](https://github.com/biplobsd/biplobsd.github.io/files/12518672/FullDupm3cR3L.zip) ***I found this file from 4pda forum page [Nikitatsivinsky](https://4pda.to/forum/index.php?showtopic=764502&view=findpost&p=115471013)***

## Flashing stock bootloader
1. Unzip FullDump3cR3L.zip
2. Remove power cable from router.
3. Connect ethernet cable on Computer and Wan port (Blue Port).
4. Press continuously reset button and re-connect power cable.
5. Continue to hold down the Reset button until the front LED colour changes from blinking orange to LED off.
6. Open browser and enter http://192.168.1.1
![full](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/01ee0573-d480-43e9-9263-c9c1e7773476)
7. Click `因件更新`>`编程器固件`>`Choose the bin file`> Uncheck `Bootloader` and `EEPROM` > `上传`
8. Wait until router restart

## Flashing Stock firmware using U-Boot Stock Recovery
### Configuration 
1. Download stock firmware: http://bigota.miwifi.com/xiaoqiang/rom/r3l/miwifi_r3l_all_23e37_2.8.51_INT.bin
2. Config static ip on your computer:
    > IP address: 192.168.31.2 <br>
    > Subnet mask: 255.255.255.0 <br>
    > Default gateway: 192.168.31.1 <br>

### Flashing stock firmware
1. Remove power cable from router.
2. Connect ethernet cable on Computer and Wan port ___Wan port changed for flashed FullDump3cR3L 😂, Now it should be first Ethernet port___
3. Press continuously reset button and re-connect power cable.
4. Continue to hold down the Reset button until the front LED colour changes from static orange to blinking orange.
5. Open browser and enter http://192.168.31.1
6. Select firmware file and click on upload button.
7. Wait until router restart (5 minutes).
<br>[More info](https://openwrt.org/toh/xiaomi/mir3c#u-boot_stock_recovery)

Now your are in the stock firmware. 🚀🚀
