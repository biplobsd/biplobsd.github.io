![preview](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/8963ee06-4ca9-4a56-b793-4be980322539)

# Use Your Brother Printer on LAN by Raspberry PI

Make your Brother printer a print server using the Raspberry Pi. In this blog, I will share my setup on how I connect my DCP-T220 Brother printer with Raspberry PI.

Why do I need that? Because I want to print from my phone, laptop, desktop, or any device that connects to my local Wi-Fi. However, the DCP-T220 has no Wi-Fi, and that printer has a USB to connect to the computer.

I have a Raspberry PI, so I want to connect that printer. However, the official driver for DCP-T220 does not work on the Raspberry PI. The Linux driver for i386 architecture, and Raspberry PI is armhf architecture. So, the official driver is not compatible with the Raspberry PI mode 3b. After some research, I found a solution to this problem. The generic IPP Everywhere driver works for connecting DCP-T220 printer with Raspberry PI. Also, you can use the IPP-over-USB protocol without installing any software.

## IPP Generic Driver for CUPS
I have tested this generic IPP driver on my DCP-T220 printer, and it is working well. For starting I will suggest a video for setuping the CUPS on the Raspberry PI -> https://youtu.be/aSJWF68baRw

After installing CUPS on the Raspberry PI, go to CUPS login on the browser http://localhost:631/ then Administration>Add printer.

Now select "Discovered Network Printers: Unknown (driverless)" and continue.
![Discovered Network Printers: Unknown (driverless)](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/42e3071f-8489-4a26-a62a-45ceef2d0c35)

Input Name, Description, Location, and check "Share This Printer" and continue.
![Add information about printer](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/c8315dbb-aad4-43b8-9d47-683b88ff5ab9)

Select make as Generic and continue.
![Select make](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/0a990511-ea27-4187-93a8-21739f2803d7)

Now finally select the model as "Generic IPP Everywhere Printer (en)" and click add printer.
![Select model](https://github.com/biplobsd/biplobsd.github.io/assets/43641536/5730315a-7fc6-4728-9357-bc57b5e5e370)

Now test a print. Done.

## IPP over USB Protocol
I found this solution on the sane-airscan discussion. https://github.com/alexpevzner/sane-airscan/discussions/115#discussioncomment-290472
You need to just edit `/etc/ipp-usb/ipp-usb.conf` on the network interface to all.

```ini
[network]
  interface = all
```
Then restart the Raspberry PI, and you should see your printer on the LAN.

## Output
<video width="100%" height="100%" autoplay loop controls>
  <source src="https://github.com/biplobsd/biplobsd.github.io/assets/43641536/cdad5fbf-16b9-47d5-85ef-325d7c4b1005" type="video/mp4">
</video>

Any questions? Feel free to leave a comment below ⏬
