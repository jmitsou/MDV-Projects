//
//  AppDelegate.m
//  testApp
//
//  Created by Jeff Mitsou on 5/8/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "AppDelegate.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    // Override point for customization after application launch.
    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    //type code here
    
    //Story Start
    
    // variables and the float to int cast
    float crispy = 5.5;
    int baconDone = (int) crispy;
    NSLog(@"The bacon is done after %i mins",baconDone);
    NSLog(@"At %f mins the bacon is crispy",crispy);
    
    // if statement
    int underCook = 3;
    
    if (baconDone>6) {
        NSLog(@"The bacon is burnt");
    } else if (baconDone<underCook) {
        NSLog(@"Bacon is under cooked");
    }
    else {
        NSLog(@"Bacon ready to eat.");
    }
    
    //AND OR Comparison
    bool panClean = YES;
    int bacon = 2;
    float oil = 1.5;
    
    if ((panClean == YES) && (oil == 1.5)) {
        NSLog(@"Ready to make bacon");
    } else if ((panClean == NO) || (bacon == 1)) {
        NSLog(@"Can't make bacon");
    } else{
        NSLog(@"blah");
    }
    
    //while loop
    int minLeft = 5;
    
    while ( minLeft > 0) {
        NSLog(@"%i mins left till bacon is done",minLeft);
        minLeft--;
    }
    NSLog(@"Bacon is now ready");
    
    
    return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application
{
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
    // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}

@end
