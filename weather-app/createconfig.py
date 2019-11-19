def main():

    print("hello world")
    configFile = "config.js"

    print ("configuration file =" + configFile);

    f=open("config.txt", "r")
    f1 = f.readlines()
    for x in f1:
        print (x)

if __name__== "__main__":
    main()
