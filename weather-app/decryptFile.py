#decryptfile.py
# requires pip install pyAesCrypt

import pyAesCrypt
bufferSize = 64 * 1024

#you would pass in the password at the commandline
password = "foo123"
pyAesCrypt.decryptFile("APIkeys.txt.aes", "APIkeysOrig.txt", password, bufferSize)
